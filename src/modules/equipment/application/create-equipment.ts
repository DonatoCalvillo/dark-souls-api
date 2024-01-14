import { DuplicatedDataError } from "../../shared/domain/errors/duplicated-data-error";
import { Logger } from "../../shared/domain/logger";
import { Equipment } from "../domain/Equipment/equipment";
import { EquipmentRepository } from "../domain/equipment-repository";
import { CreateEquipmentDto } from "./dto/create-equipment-dto";

export class CreateEquipment {
  private readonly logger: Logger;
  private readonly equipmentRepository: EquipmentRepository

  constructor(dependencies: {
    logger: Logger;
    equipmentRepository: EquipmentRepository;
  }){
    this.logger = dependencies.logger
    this.equipmentRepository = dependencies.equipmentRepository
  }

  async run(newEquipmentDto: CreateEquipmentDto){
    this.logger.info(`[CreateEquipment] Validating new Equipment name 🏹`)
    const equipment = await this.equipmentRepository.getEquipmentByName(newEquipmentDto.name)
    this.logger.debug(`[CreateEquipment] Equipment <${newEquipmentDto.name}> 🏹${JSON.stringify(equipment)}`)
    const existEquipment = equipment ? true : false
    if(existEquipment)
      throw new DuplicatedDataError('equipment name', `already exist`)

    this.logger.info(`[CreateEquipment] Creating new Equipment in the db 🏹`)
    const newEquipmentRepository = await this.equipmentRepository.createEquipment(newEquipmentDto);
    this.logger.debug(`[CreateEquipment] New Equipment DB 🏹 : ${JSON.stringify(newEquipmentRepository)}`)
    
    this.logger.info(`[CreateEquipment] Creating new Equipment Model 🏹`)
    const newEquipment: Equipment = new Equipment(
      newEquipmentRepository.id,
      newEquipmentRepository.name,
      newEquipmentRepository.description,
      JSON.stringify(newEquipmentRepository.statistics),
      newEquipmentRepository.location,
      newEquipmentRepository.image,
      String(newEquipmentRepository.created_at),
      String(newEquipmentRepository.updated_at)
    )
    this.logger.debug(`[CreateEquipment] New Equipment Model 🏹 : ${JSON.stringify(newEquipment.toPrimitive())}`)
    
    return newEquipment
  }
}