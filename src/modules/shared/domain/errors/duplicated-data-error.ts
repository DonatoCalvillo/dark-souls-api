export class DuplicatedDataError extends Error {
  constructor(parameter: string, detail: string){
    super(`Duplicated data <${parameter}> 🔥 : ${detail}`)
  }
}