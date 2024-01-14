import { Router } from "express";

import { handleRequest } from "../../../../shared/infrastructure/handle-request";
import { ContainerEnum } from "../../../../shared/domain/enum/container-enum";

const equipmentRoute: Router = Router();

const {
  createEquipmentController,
  getEquipmentsController,
  getEquipmentController,
} = ContainerEnum;

/**
 * @swagger
 * tags:
 *  name: Equipment
 *  description: Dark Souls Equipment
 */

/**
 * @swagger
 * /api/v1/equipment:
 *   get:
 *     summary: Get equipments with pagination
 *     tags: [Equipment]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items to retrieve per page.
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *         description: Number of items to skip (pagination).
 *       - in: query
 *         name: keyWord
 *         schema:
 *           type: string
 *         description: Search keyword to filter equipments by name.
 *     responses:
 *       200:
 *         description: Success. Retrieve a list of equipments.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Getting the equipments successfully
 *               data:
 *                 equipments:
 *                   - id: afea34f2-c341-4674-8ef2-b381e635a1fb
 *                     name: Name
 *                     description: Description
 *                     statistics:
 *                       requiredAttributes:
 *                         strength: 0
 *                         dexterity: 0
 *                       additionalAttributes:
 *                         strength: D
 *                         dexterity: E
 *                       statistics:
 *                         weaponType: Weapon type
 *                         attackType: Attack type
 *                         duration: 0
 *                         weight: 0
 *                       ATK:
 *                         physical: 0
 *                         magic: 0
 *                         fire: 0
 *                         electric: 0
 *                         critical: 0
 *                       specialEffects:
 *                         bleeding: 0
 *                         toxic: 0
 *                         divine: "-"
 *                         hidden: "-"
 *                       damageReduction:
 *                         physical: 0
 *                         magic: 0
 *                         fire: 0
 *                         electric: 0
 *                         stability: 0
 *                     location: Location
 *                     image: image.jpg
 *                     createdAt: MM/DD/YYYY HH:MM:SS
 *                     updatedAt: MM/DD/YYYY HH:MM:SS
 */
equipmentRoute.get("/", handleRequest(getEquipmentsController));

/**
 * @swagger
 * /api/v1/equipment/{id}:
 *   get:
 *     summary: Get a equipment by id
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The ID of the equipment (UUID).
 *     responses:
 *       200:
 *         description: Success. Retrieve a equipment.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Getting the equipments successfully
 *               data:
 *                 equipments:
 *                   id: afea34f2-c341-4674-8ef2-b381e635a1fb
 *                   name: Name
 *                   description: Description
 *                   statistics:
 *                     requiredAttributes:
 *                       strength: 0
 *                       dexterity: 0
 *                     additionalAttributes:
 *                       strength: D
 *                       dexterity: E
 *                     statistics:
 *                       weaponType: Weapon type
 *                       attackType: Attack type
 *                       duration: 0
 *                       weight: 0
 *                     ATK:
 *                       physical: 0
 *                       magic: 0
 *                       fire: 0
 *                       electric: 0
 *                       critical: 0
 *                     specialEffects:
 *                       bleeding: 0
 *                       toxic: 0
 *                       divine: "-"
 *                       hidden: "-"
 *                     damageReduction:
 *                       physical: 0
 *                       magic: 0
 *                       fire: 0
 *                       electric: 0
 *                       stability: 0
 *                   location: Location
 *                   image: image.jpg
 *                   createdAt: MM/DD/YYYY HH:MM:SS
 *                   updatedAt: MM/DD/YYYY HH:MM:SS
 */
equipmentRoute.get("/:id", handleRequest(getEquipmentController));

/**
 * @swagger
 * /api/v1/equipment:
 *   post:
 *     summary: Create an equipment
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
 *         description: Equipment created successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: The equipment was created successfully
 *               data:
 *                 equipment:
 *                   id: afea34f2-c341-4674-8ef2-b381e635a1fb
 *                   name: Name
 *                   description: Description
 *                   statistics:
 *                     requiredAttributes:
 *                       strength: 0
 *                       dexterity: 0
 *                     additionalAttributes:
 *                       strength: D
 *                       dexterity: E
 *                     statistics:
 *                       weaponType: Weapon type
 *                       attackType: Attack type
 *                       duration: 0
 *                       weight: 0
 *                     ATK:
 *                       physical: 0
 *                       magic: 0
 *                       fire: 0
 *                       electric: 0
 *                       critical: 0
 *                     specialEffects:
 *                       bleeding: 0
 *                       toxic: 0
 *                       divine: "-"
 *                       hidden: "-"
 *                     damageReduction:
 *                       physical: 0
 *                       magic: 0
 *                       fire: 0
 *                       electric: 0
 *                       stability: 0
 *                   location: Location
 *                   image: image.jpg
 *                   createdAt: MM/DD/YYYY HH:MM:SS
 *                   updatedAt: MM/DD/YYYY HH:MM:SS
 */
equipmentRoute.post("/", handleRequest(createEquipmentController));

export { equipmentRoute };
