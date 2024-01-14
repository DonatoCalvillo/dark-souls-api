import { CommonId } from '../../../shared/domain/common/common-id';

export class EquipmentTypeId extends CommonId{
  constructor(id: string){
    super(id, 'Equipment Type')
  }
}