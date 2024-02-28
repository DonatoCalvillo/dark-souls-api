import {
  GetEquipmentsDto,
  CreateEquipmentDto,
  GetEquipmentByIdDto,
  UpdateEquipmentDto
} from "../application/dto";

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
  updateEquipment(equipmentDto: UpdateEquipmentDto): Promise<EquipmentEntity>;
}
