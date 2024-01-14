import { CommonPositiveNumber } from "../../../shared/domain/common/common-positive-number";
import { InvalidParameterError } from "../../../shared/domain/errors/invalid-parameter-error";

enum Order {
  ASC = "ASC",
  DESC = "DESC",
}

export class GetEquipmentsDto {
  public order: Order;
  public skip: CommonPositiveNumber;
  public limit: CommonPositiveNumber;

  constructor(
    skip: number,
    limit: number,
    public keyWord: string,
    order: string
  ) {
    this.skip = new CommonPositiveNumber("skip", skip);
    this.limit = new CommonPositiveNumber("limit", limit);

    this.validateOrderEnum(order);
    this.order = order as Order;
  }

  private validateOrderEnum(order: string) {
    if (!Object.values(Order).includes(order as Order))
      throw new InvalidParameterError(
        "order",
        ` Accepted values are: ${Object.values(Order).join(", ")}`
      );
  }
}
