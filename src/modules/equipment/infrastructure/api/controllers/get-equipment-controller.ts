import { Request, Response } from "express";

import { GetEquipmentById } from "../../../application/get-equipment-by-id";

import { Equipment } from "../../../domain/Equipment/equipment";

import { GetEquipmentByIdDto } from "../../../application/dto/get-equipment-by-id-dto";

import { Logger } from "../../../../shared/domain/logger";
import { Controller } from "../../../../shared/domain/controller";
import { ErrorHandler } from "../../../../shared/domain/error-handler";

export class GetEquipmentController implements Controller {
  private readonly logger: Logger;
  private readonly getEquipmentById: GetEquipmentById;

  constructor(dependencies: {
    logger: Logger;
    getEquipmentById: GetEquipmentById;
  }) {
    this.logger = dependencies.logger;
    this.getEquipmentById = dependencies.getEquipmentById;
  }

  async run(req: Request, res: Response) {
    const { id } = req.params;
    this.logger.info(`[GetEquipmentController] Getting Equipment <${id}> 🏹`);
    try {
      const equipmentDto: GetEquipmentByIdDto = new GetEquipmentByIdDto(id);
      const equipment: Equipment =
        await this.getEquipmentById.run(equipmentDto);
      res.status(200).json({
        success: true,
        message: `Getting the equipment <${id}> successfully`,
        data: { equipment: equipment.toPrimitive() },
      });
    } catch (error) {
      this.logger.error(`[GetEquipmentController] 🔥 ${error}`);
      const { statusCode, message } = ErrorHandler(error);
      res.status(statusCode).json({
        success: false,
        message,
      });
    }
  }
}
