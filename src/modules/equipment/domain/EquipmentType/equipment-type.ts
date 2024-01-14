import { EquipmentTypeDate } from "./equipment-type-date";
import { EquipmentTypeId } from "./equipment-type-id";

export class EquipmentType {
  private id: EquipmentTypeId
  private createdAt: EquipmentTypeDate
  private updatedAt: EquipmentTypeDate

  constructor(
    id: string,
    private name: string,
    createdAt: string,
    updatedAt: string
  ){
    this.id = new EquipmentTypeId(id)
    this.createdAt = new EquipmentTypeDate(createdAt)
    this.updatedAt = new EquipmentTypeDate(updatedAt)
  }

  toPrimitive(){
    return {
      id: this.id.getValue(),
      name: this.name,
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue()
    }
  }
}