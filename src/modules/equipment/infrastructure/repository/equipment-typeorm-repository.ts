import { ILike } from "typeorm";

import { GetEquipmentsDto } from "../../application/dto/get-equipments-dto";
import { CreateEquipmentDto } from "../../application/dto/create-equipment-dto";

import { EquipmentRepository } from "../../domain/equipment-repository";

import { Logger } from "../../../shared/domain/logger";
import { NoDataFoundError } from "../../../shared/domain/errors/no-data-found-error";

import { TypeOrmDataSource } from "../../../database/infrastructure/typeorm-config";
import {
  EquipmentEntity,
  EquipmentTypeEntity,
} from "../../../database/infrastructure/entities";

export class EquipmentTypeOrmRepository implements EquipmentRepository {
  private readonly logger: Logger;

  private readonly equipmentRepository =
    TypeOrmDataSource.getRepository(EquipmentEntity);
  private readonly equipmentTypeRepository =
    TypeOrmDataSource.getRepository(EquipmentTypeEntity);

  constructor(dependencies: { logger: Logger }) {
    this.logger = dependencies.logger;
  }

  async createEquipment(
    newEquipmentDto: CreateEquipmentDto
  ): Promise<EquipmentEntity> {
    this.logger.info(`[EquipmentTypeOrmRepository] Creating new Equipment 🏹`);
    this.logger.debug(
      `[EquipmentTypeOrmRepository] New Equipment dto 🏹 : ${JSON.stringify(
        newEquipmentDto.toPrimitive()
      )}`
    );

    const equipmentTypeId = newEquipmentDto.equipmentTypeId.getValue();
    const equipmentType: EquipmentTypeEntity | null =
      await this.equipmentTypeRepository.findOne({
        where: { id: equipmentTypeId },
      });

    if (!equipmentType) throw new NoDataFoundError("Equipment type");

    const newEquipment = new EquipmentEntity();
    newEquipment.name = newEquipmentDto.name;
    newEquipment.description = newEquipmentDto.description;
    newEquipment.statistics = newEquipmentDto.statistics.getValue();
    newEquipment.location = newEquipmentDto.location;
    newEquipment.image = "image.jpg";
    newEquipment.equipmentTypeId = equipmentType;

    this.logger.debug(
      `[EquipmentTypeOrmRepository] New Equipment entity 🏹 : ${JSON.stringify(
        newEquipment
      )}`
    );
    const equipmentSaved = await this.equipmentRepository.save(newEquipment);

    return equipmentSaved;
  }

  async getEquipmentByName(
    equipmentName: string
  ): Promise<EquipmentEntity | null> {
    this.logger.info(
      `[EquipmentTypeOrmRepository] Getting Equipment <${equipmentName}> 🏹`
    );
    const equipment: EquipmentEntity | null =
      await this.equipmentRepository.findOne({
        where: { name: equipmentName },
      });
    return equipment;
  }

  async getEquipments({
    skip,
    limit,
    keyWord,
    order,
  }: GetEquipmentsDto): Promise<EquipmentEntity[] | null> {
    this.logger.info(`[EquipmentTypeOrmRepository] Getting Equipments 🏹`);
    const whereConditions: { name?: any } = {};
    if (keyWord) {
      whereConditions.name = ILike(`%${keyWord.toLowerCase()}%`);
    }

    const queryBuilder = this.equipmentRepository
      .createQueryBuilder("equipment")
      .where(whereConditions)
      .orderBy("equipment.name", order)
      .skip(skip.getValue());

    if (limit && limit.getValue() > 0) queryBuilder.take(limit.getValue());

    const equipments: EquipmentEntity[] | null = await queryBuilder.getMany();
    return equipments;
  }
}
