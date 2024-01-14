export class InvalidParameterError extends Error {
  constructor(parameter: string, detail: string){
    super(`Invalid parameter <${parameter}> 🔥 : ${detail}`)
  }
}