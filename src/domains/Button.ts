import { Color } from "./Color";

export interface IButton {
  caption: string;
  color: Color;
  href : string;
}

export class Button {
  caption: string;
  color: Color;
  href : string;
  constructor(args: IButton) {
    this.caption = args.caption;
    this.color = args.color;
    this.href = args.href;
  }
}
