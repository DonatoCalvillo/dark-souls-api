import { Request, Response } from "express";

import { GetEquipments } from "../../../application/get-equipments";
import { GetEquipmentsDto } from "../../../application/dto/get-equipments-dto";

import { Equipment } from "../../../domain/Equipment/equipment";

import { Controller } from "../../../../shared/domain/controller";
import { Logger } from "../../../../shared/domain/logger";
import { ErrorHandler } from "../../../../shared/domain/error-handler";

export class GetEquipmentsController implements Controller {
  private readonly logger: Logger;
  private readonly getEquipments: GetEquipments;

  constructor(dependencies: { logger: Logger; getEquipments: GetEquipments }) {
    this.logger = dependencies.logger;
    this.getEquipments = dependencies.getEquipments;
  }

  async run(req: Request, res: Response) {
    this.logger.info(`[GetEquipmentsController] Getting Equipments 🏹`);
    const { skip = 0, limit = 0, keyWord = "", order = "ASC" } = req.query;
    this.logger.debug(
      `[GetEquipmentsController] Equipment body: ${JSON.stringify({
        skip,
        limit,
        keyWord,
        order,
      })}`
    );
    try {
      const getEquipmentDto: GetEquipmentsDto = new GetEquipmentsDto(
        Number(skip),
        Number(limit),
        String(keyWord),
        String(order)
      );
      const equipments: Equipment[] | null =
        await this.getEquipments.run(getEquipmentDto);

      res.status(200).json({
        success: true,
        message: "Getting the equipments successfully",
        data: {
          equipments: equipments
            ? equipments.map((equipment) => equipment.toPrimitive())
            : [],
        },
      });
    } catch (error) {
      this.logger.error(`[GetEquipmentsController] 🔥 ${error}`);
      const { statusCode, message } = ErrorHandler(error);
      res.status(statusCode).json({
        success: false,
        message,
      });
    }
  }
}
