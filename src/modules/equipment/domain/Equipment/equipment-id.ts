import { CommonId } from '../../../shared/domain/common/common-id';

export class EquipmentId extends CommonId{
  constructor(id: string){
    super(id, 'Equipment')
  }
}