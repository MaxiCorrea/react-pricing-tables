export interface IPrice {
  value: number;
}

export class Price {
  value: number;
  constructor(args: IPrice) {
    this.value = args.value;
  }
}
