import { Color } from "./Color";

export interface IHeader {
  title: string;
  color: Color;
}

export class Header {
  title: string;
  color: Color;
  constructor(args: IHeader) {
    this.title = args.title;
    this.color = args.color;
  }
}
