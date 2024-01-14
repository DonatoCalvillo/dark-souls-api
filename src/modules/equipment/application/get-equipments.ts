import { GetEquipmentsDto } from "./dto/get-equipments-dto";

import { Equipment } from "../domain/Equipment/equipment";
import { EquipmentRepository } from "../domain/equipment-repository";

import { EquipmentEntity } from "../../database/infrastructure/entities";

import { Logger } from "../../shared/domain/logger";

export class GetEquipments {
  private readonly logger: Logger;
  private readonly equipmentRepository: EquipmentRepository;

  constructor(dependencies: {
    logger: Logger;
    equipmentRepository: EquipmentRepository;
  }) {
    this.logger = dependencies.logger;
    this.equipmentRepository = dependencies.equipmentRepository;
  }

  async run(equipmentDto: GetEquipmentsDto): Promise<Equipment[] | null> {
    this.logger.info(`[GetEquipments] Getting Equipments 🏹`);
    const equipmentsDb: EquipmentEntity[] | null =
      await this.equipmentRepository.getEquipments(equipmentDto);

    if (!equipmentsDb) return null;

    const equipments: Equipment[] = equipmentsDb.map(
      (equipment) =>
        new Equipment(
          equipment.id,
          equipment.name,
          equipment.description,
          JSON.stringify(equipment.statistics),
          equipment.location,
          equipment.image,
          String(equipment.created_at),
          String(equipment.updated_at)
        )
    );

    return equipments;
  }
}
