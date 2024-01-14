import { EquipmentEntity } from "../../database/infrastructure/entities";
import { CreateEquipmentDto } from "../application/dto/create-equipment-dto";

export interface EquipmentRepository {
  createEquipment(createEquipmentDto: CreateEquipmentDto): Promise<EquipmentEntity>
  getEquipmentByName(equipmentName: string): Promise<EquipmentEntity | null>
}