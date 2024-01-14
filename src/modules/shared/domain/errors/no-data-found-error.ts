export class NoDataFoundError extends Error{
  constructor(className: string){
    super(`No data found ❗️ <${className}>`)
  }
}