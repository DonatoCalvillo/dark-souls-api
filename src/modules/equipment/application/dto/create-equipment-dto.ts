import { CommonId } from "../../../shared/domain/common/common-id"
import { InvalidParameterError } from "../../../shared/domain/errors/invalid-parameter-error"
import { EquipmentStatistics } from "../../domain/Equipment/equipment-statistics"

export class CreateEquipmentDto {
  public readonly equipmentTypeId: CommonId
  public readonly statistics: EquipmentStatistics

  constructor(
    public readonly name: string,
    public readonly description: string,
    statistics: string,
    public readonly location: string,
    equipmentTypeId: string,
  ){
    this.verifyEmptyField(name, 'name')
    this.verifyEmptyField(description, 'description')
    this.verifyEmptyField(location, 'location')

    this.verifyEmptyField(equipmentTypeId, 'equipmentTypeId')
    this.equipmentTypeId = new CommonId(equipmentTypeId, 'equipmentTypeId')

    this.statistics = new EquipmentStatistics(statistics)
  }

  verifyEmptyField(value: string, field: string){
    if(!value || value.length == 0 || value == undefined || value == null)
      throw new InvalidParameterError(field, `is necessary in the request.`)
  }

  toPrimitive(){
    return {
      name: this.name,
      description: this.description,
      statistics: this.statistics,
      location: this.location
    }
  }
}