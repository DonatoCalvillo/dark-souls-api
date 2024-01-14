import { CommonDate } from '../../../shared/domain/common/common-date';

export class EquipmentDate extends CommonDate{
  constructor(date: string){
    super(date, 'Equipment')
  }
}