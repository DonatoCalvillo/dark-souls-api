import { Router } from 'express'
import { handleRequest } from '../../../../shared/infrastructure/handle-request'

const healthRouter: Router = Router()

/**
 * @swagger
 * tags:
 *  name: Health
 *  description: Health API endpoint
 */

/**
 * @swagger
 * /api/health:
 *   head:
 *     summary: check the api health
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The API it's healthy.
 */
healthRouter.head('/', handleRequest('healthController'))

export { healthRouter }
