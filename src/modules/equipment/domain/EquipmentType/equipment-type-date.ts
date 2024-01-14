import { CommonDate } from '../../../shared/domain/common/common-date';

export class EquipmentTypeDate extends CommonDate{
  constructor(date: string){
    super(date, 'Equipment Type')
  }
}