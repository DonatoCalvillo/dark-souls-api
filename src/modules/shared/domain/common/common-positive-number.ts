import { InvalidParameterError } from "../errors/invalid-parameter-error";

export class CommonPositiveNumber {
  constructor(
    className: string,
    private value: number
  ) {
    this.validatePositiveNumber(value, className);
  }

  getValue() {
    return this.value;
  }

  private validatePositiveNumber(number: number, className: string) {
    if (number < 0)
      throw new InvalidParameterError(className, `The value most be positive.`);
  }
}
