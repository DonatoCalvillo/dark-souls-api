import Ajv from "ajv";
import { InvalidParameterError } from "../../../shared/domain/errors/invalid-parameter-error";
import { weaponSchema } from "./schemas/weapon-schema";

export class EquipmentStatistics {
  private value: any
  constructor(
    value: string
  ){
    this.verifyJsonField(value, 'statistics')
    this.value = JSON.parse(value)
  }

  getValue(){
    return this.value
  }

  verifyJsonField(value: string, field: string){
    let statistics;
    try {
      console.log(`statics value: ${value}`)
      statistics = JSON.parse(value.trim());
      console.log(`statics: ${statistics}`)

    } catch (error) {
      throw new InvalidParameterError(field, `is necessary in the request and most be a JSON.`)
    }
    if(!this.isValidWeaponStatistics(statistics))
      throw new InvalidParameterError(field, `is not the correct format.`)
  }
  
  isValidWeaponStatistics(json: any) {
    const validate = new Ajv().compile(weaponSchema);
    return validate(json);
  }
}