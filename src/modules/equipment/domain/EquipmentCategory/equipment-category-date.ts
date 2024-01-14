import { CommonDate } from '../../../shared/domain/common/common-date';

export class EquipmentCategoryDate extends CommonDate{
  constructor(date: string){
    super(date, 'Equipment Category')
  }
}