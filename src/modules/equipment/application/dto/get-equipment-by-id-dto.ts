import { CommonId } from "../../../shared/domain/common/common-id";

export class GetEquipmentByIdDto {
  public equipmentId: CommonId;
  constructor(equipmentId: string) {
    this.equipmentId = new CommonId(equipmentId, "equipment id");
  }
}
