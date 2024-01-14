import { EquipmentCategoryDate } from "./equipment-category-date";
import { EquipmentCategoryId } from "./equipment-category-id";

export class EquipmentCategory {
  private id: EquipmentCategoryId
  private createdAt: EquipmentCategoryDate
  private updatedAt: EquipmentCategoryDate

  constructor(
    id: string,
    private name: string,
    private description: string,
    createdAt: string,
    updatedAt: string
  ){
    this.id = new EquipmentCategoryId(id)
    this.createdAt = new EquipmentCategoryDate(createdAt)
    this.updatedAt = new EquipmentCategoryDate(updatedAt)
  }

  toPrimitive(){
    return {
      id: this.id.getValue(),
      name: this.name,
      description: this.description,
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue()
    }
  }
}