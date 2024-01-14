import { validate as uuidValidate } from 'uuid';

export class CommonId {
  constructor(
    private readonly id: string,
    private readonly className: string
  ){
    this.validateId(id)
  }

  getValue(){
    return this.id
  }

  validateId(id: string){
    if( !uuidValidate(id) )
      throw new Error(`The id <${id}> is not a valid <${this.className}> Id`)
  }
}