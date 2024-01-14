import * as Awilix from "awilix";

import { WinstonLogger } from "./logger/winston-logger";

import { ContainerEnum } from "../domain/enum/container-enum";

import { HealthController } from "../../health/infrastructure/api/controllers/health-controller";

import { CreateEquipment } from "../../equipment/application/create-equipment";
import { GetEquipmentsController } from "../../equipment/infrastructure/api/controllers/get-equipments-controller";
import { EquipmentTypeOrmRepository } from "../../equipment/infrastructure/repository/equipment-typeorm-repository";
import { CreateEquipmentController } from "../../equipment/infrastructure/api/controllers/create-equipment-controller";
import { GetEquipments } from "../../equipment/application/get-equipments";

const container = Awilix.createContainer({
  injectionMode: Awilix.InjectionMode.PROXY,
});

container.register({
  [ContainerEnum.logger]: Awilix.asClass(WinstonLogger),

  [ContainerEnum.equipmentRepository]: Awilix.asClass(
    EquipmentTypeOrmRepository
  ),

  [ContainerEnum.healthController]: Awilix.asClass(HealthController),
  [ContainerEnum.createEquipment]: Awilix.asClass(CreateEquipment),
  [ContainerEnum.getEquipments]: Awilix.asClass(GetEquipments),

  [ContainerEnum.createEquipmentController]: Awilix.asClass(
    CreateEquipmentController
  ),
  [ContainerEnum.getEquipmentsController]: Awilix.asClass(
    GetEquipmentsController
  ),
});

export { container };
