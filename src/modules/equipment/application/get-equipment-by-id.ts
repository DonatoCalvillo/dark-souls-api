import { GetEquipmentByIdDto } from "./dto/get-equipment-by-id-dto";

import { Equipment } from "../domain/Equipment/equipment";
import { EquipmentRepository } from "../domain/equipment-repository";

import { EquipmentEntity } from "../../database/infrastructure/entities";

import { Logger } from "../../shared/domain/logger";
import { NoDataFoundError } from "../../shared/domain/errors/no-data-found-error";

export class GetEquipmentById {
  private readonly logger: Logger;
  private readonly equipmentRepository: EquipmentRepository;

  constructor(dependencies: {
    logger: Logger;
    equipmentRepository: EquipmentRepository;
  }) {
    this.logger = dependencies.logger;
    this.equipmentRepository = dependencies.equipmentRepository;
  }

  async run(equipmentDto: GetEquipmentByIdDto) {
    this.logger.info(
      `[GetEquipments] Getting Equipment <${equipmentDto.equipmentId.getValue()}> 🏹`
    );
    const equipmentDb: EquipmentEntity | null =
      await this.equipmentRepository.getEquipmentById(equipmentDto);

    if (!equipmentDb) throw new NoDataFoundError("Equipment");

    const equipment: Equipment = new Equipment(
      equipmentDb.id,
      equipmentDb.name,
      equipmentDb.description,
      JSON.stringify(equipmentDb.statistics),
      equipmentDb.location,
      equipmentDb.image,
      String(equipmentDb.created_at),
      String(equipmentDb.updated_at)
    );

    return equipment;
  }
}
