import { EquipmentType } from "../EquipmentType/equipment-type";
import { EquipmentDate } from "./equipment-date";
import { EquipmentId } from "./equipment-id";
import { EquipmentStatistics } from "./equipment-statistics";

export class Equipment {
  private id: EquipmentId
  private statistics: EquipmentStatistics
  private createdAt: EquipmentDate
  private updatedAt: EquipmentDate
  private type: EquipmentType

  constructor(
    id: string,
    private name: string,
    private description: string,
    statistics: string,
    private location: string,
    private image: string,
    createdAt: string,
    updatedAt: string
  ) {
    this.id = new EquipmentId(id)
    this.createdAt = new EquipmentDate(createdAt)
    this.updatedAt = new EquipmentDate(updatedAt)
    this.statistics = new EquipmentStatistics(statistics)
  }

  setType(type: EquipmentType){
    this.type = type
  }

  toPrimitive() {
    return {
      id: this.id.getValue(),
      name: this.name,
      description: this.description,
      statistics: this.statistics,
      location: this.location,
      image: this.image,
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    }
  }

  toPrimitiveDetail(){
    return {
      id: this.id.getValue(),
      name: this.name,
      description: this.description,
      statistics: this.statistics,
      location: this.location,
      image: this.image,
      type: this.type.toPrimitive(),
      createdAt: this.createdAt.getValue(),
      updatedAt: this.updatedAt.getValue(),
    }
  }
}
