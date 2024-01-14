import { Router } from 'express';
import { handleRequest } from '../../../../shared/infrastructure/handle-request'
import { ContainerEnum } from '../../../../shared/domain/enum/container-enum';

const equipmentRoute: Router = Router();

const {
  createEquipmentController
} = ContainerEnum

/**
 * @swagger
 * tags:
 *  name: Equipment
 *  description: Dark Souls Equipment
 */

/**
 * @swagger
 * /api/v1/equipment:
 *   post:
 *     summary: create an equipment
 *     tags: [Equipment]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Name of the equipment
 *              description:
 *                type: string
 *                description: Description of the equipment
 *              statistics:
 *                type: string
 *                description: Statistics of the equipment in JSON format but in the string
 *              location:
 *                type: string
 *                description: Location of the equipment
 *              equipmentTypeId:
 *                type: string
 *                description: Id from equipment type
 *     responses:
 *       200:
 *         description: The API it's healthy.
 */
equipmentRoute.post('/', handleRequest(createEquipmentController))

export { equipmentRoute }