import express, { type Application } from 'express'
import cors from 'cors'

import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import { swaggerConfiguration } from './config/swagger'
import { variables } from './config/variables'

import { type Logger } from './modules/shared/domain/logger'
import { container } from './modules/shared/infrastructure/container'

import { TypeOrmDataSource } from './modules/database/infrastructure/typeorm-config'

import { healthRouter } from './modules/health/infrastructure/api/routes/health-router'
import { equipmentRoute } from './modules/equipment/infrastructure/api/routes/equipment-route'

export class App {
  _app: Application
  _port: number
  _logger: Logger

  constructor () {
    this._app = express()

    this._port = variables.get('server.port')

    this._logger = container.resolve<Logger>('logger')

    this.database()

    this.middlewares()

    this.router()
  }

  middlewares (): void {
    // CORS
    this._app.use(cors())

    // Accept JSON
    this._app.use(express.json({ limit: '500kb' }))
  }

  router (): void {
    this._app.use('/api/health', healthRouter)
    this._app.use('/api/v1/equipment', equipmentRoute)

    const specs = swaggerJsDoc(swaggerConfiguration)
    this._app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))
  }

  listen (): void {
    this._app.listen(this._port, () => {
      this._logger.info(`[APP] - Started application on port ${this._port}`)
      this._logger.info(`[APP] - Environment: ${variables.get('env')}`)
    })
  }

  async database (): Promise<void> {
    try {
      await TypeOrmDataSource.initialize();
      this._logger.info(`[APP] - Database connection successfully`)
    } catch (error) {
      this._logger.error(`[APP] - Database connection went wrong:`)
      console.log(error)
    }
  }
}
