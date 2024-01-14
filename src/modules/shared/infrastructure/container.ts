import * as Awilix from 'awilix'

import { WinstonLogger } from './logger/winston-logger'

import { ContainerEnum } from '../domain/enum/container-enum'

import { CreateEquipment } from '../../equipment/application/create-equipment'

import { HealthController } from '../../health/infrastructure/api/controllers/health-controller'
import { CreateEquipmentController } from '../../equipment/infrastructure/api/controllers/create-equipment-controller'
import { EquipmentTypeOrmRepository } from '../../equipment/infrastructure/repository/equipment-typeorm-repository'

const container = Awilix.createContainer({
  injectionMode: Awilix.InjectionMode.PROXY
})

container.register({
  [ContainerEnum.logger]: Awilix.asClass(WinstonLogger),
  [ContainerEnum.equipmentRepository]: Awilix.asClass(EquipmentTypeOrmRepository),
  [ContainerEnum.createEquipment]: Awilix.asClass(CreateEquipment),
  [ContainerEnum.healthController]: Awilix.asClass(HealthController),
  [ContainerEnum.createEquipmentController]: Awilix.asClass(CreateEquipmentController)
})

export { container }
