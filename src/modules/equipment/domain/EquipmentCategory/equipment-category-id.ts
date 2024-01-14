import { CommonId } from '../../../shared/domain/common/common-id';

export class EquipmentCategoryId extends CommonId{
  constructor(id: string){
    super(id, 'Equipment Category')
  }
}