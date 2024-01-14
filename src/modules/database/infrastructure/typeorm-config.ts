import "reflect-metadata";
import { DataSource } from "typeorm";

import { 
  EquipmentEntity, 
  EquipmentTypeEntity,
  EquipmentCategoryEntity
} from "./entities";

import { variables } from '../../../config/variables'

export const TypeOrmDataSource = new DataSource({
  type: "postgres",
  host: `${variables.get('db.host')}`,
  port: Number(variables.get('db.port')),
  username: `${variables.get('db.user')}`,
  password: `${variables.get('db.password')}`,
  database: `${variables.get('db.database')}`,
  synchronize: true,
  logging: true,
  entities: [
    EquipmentEntity, 
    EquipmentTypeEntity,
    EquipmentCategoryEntity
  ],
}) 

