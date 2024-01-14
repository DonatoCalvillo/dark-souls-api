import { GetEquipmentsDto } from "../application/dto/get-equipments-dto";
import { CreateEquipmentDto } from "../application/dto/create-equipment-dto";
import { GetEquipmentByIdDto } from "../application/dto/get-equipment-by-id-dto";

import { EquipmentEntity } from "../../database/infrastructure/entities";

export interface EquipmentRepository {
  createEquipment(
    createEquipmentDto: CreateEquipmentDto
  ): Promise<EquipmentEntity>;
  getEquipmentById(
    equipmentId: GetEquipmentByIdDto
  ): Promise<EquipmentEntity | null>;
  getEquipmentByName(equipmentName: string): Promise<EquipmentEntity | null>;
  getEquipments(
    equipmentDto: GetEquipmentsDto
  ): Promise<EquipmentEntity[] | null>;
}
