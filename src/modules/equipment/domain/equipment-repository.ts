import { CreateEquipmentDto } from "../application/dto/create-equipment-dto";
import { GetEquipmentsDto } from "../application/dto/get-equipments-dto";

import { EquipmentEntity } from "../../database/infrastructure/entities";

export interface EquipmentRepository {
  createEquipment(
    createEquipmentDto: CreateEquipmentDto
  ): Promise<EquipmentEntity>;
  getEquipmentByName(equipmentName: string): Promise<EquipmentEntity | null>;
  getEquipments(
    equipmentDto: GetEquipmentsDto
  ): Promise<EquipmentEntity[] | null>;
}
