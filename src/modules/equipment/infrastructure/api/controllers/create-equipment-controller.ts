import { Request, Response } from 'express';

import { Equipment } from '../../../domain/Equipment/equipment';

import { CreateEquipment } from '../../../../equipment/application/create-equipment';
import { CreateEquipmentDto } from '../../../../equipment/application/dto/create-equipment-dto';

import { Controller } from "../../../../shared/domain/controller";
import { Logger } from "../../../../shared/domain/logger";
import { ErrorHandler } from '../../../../shared/domain/error-handler';

export class CreateEquipmentController implements Controller {
  private readonly logger: Logger
  private readonly createEquipment: CreateEquipment

  constructor(dependencies: {
    logger: Logger;
    createEquipment: CreateEquipment;
  }){
    this.logger = dependencies.logger
    this.createEquipment = dependencies.createEquipment
  }

  async run(req: Request, res: Response) {
    this.logger.info(`[CreateEquipmentController] Creating new Equipment 🏹`)
    const { name, description, statistics, location, equipmentTypeId } = req.body
    this.logger.debug(`[CreateEquipmentController] Equipment body: ${JSON.stringify({ name, description, statistics, location })}`)
    try {
      const newEquipmentDto = new CreateEquipmentDto(name, description, JSON.stringify(statistics), location, equipmentTypeId);
      const newEquipment: Equipment = await this.createEquipment.run(newEquipmentDto)

      res.status(200).json({
        success: true,
        message: `The equipment was created successfully`,
        data: { equipment: newEquipment.toPrimitive() }
      })
    }catch( error ){
      this.logger.error(`[CreateEquipmentController] 🔥 ${error}`)
      const { statusCode, message } = ErrorHandler(error)
      res.status(statusCode).json({
        success: false,
        message
      })
    }
  }
}