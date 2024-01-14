export class CommonDate {
  private readonly UTCdate: Date;
  private readonly date: string;
  //private value: string;
  constructor(
    private readonly dateString: string,
    private readonly className: string
  ){
    this.UTCdate = new Date(dateString)
    this.date = this.UTCdate.toLocaleString(undefined, { timeZone: 'America/Mexico_City' })
    this.validateDate()
   // this.formatDate()
  }

  getValue() {
    return this.date
  }

  validateDate(){
    if (isNaN(this.UTCdate.getTime())) 
      throw new Error(`The date <${this.dateString}> is not a valid <{${this.className}}> date.`);
  }
/*
  formatDate(){
    const year = this.date.getFullYear();
    const month = this.addZero(this.date.getMonth() + 1);
    const day = this.addZero(this.date.getDate());
    const hours = this.addZero(this.date.getHours());
    const minutes = this.addZero(this.date.getMinutes());
  
    this.value = `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  addZero(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }
  */
}