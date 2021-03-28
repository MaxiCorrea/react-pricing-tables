import { Color } from "./Color";
import { Item } from "./Item";

export interface ITable {
  title: string;
  color: Color;
  items: Item[];
  price: number;
  url: string;
}

export class Table {
  title: string;
  color: Color;
  items: Item[];
  price: number;
  url: string;
  constructor(args: ITable) {
    this.title = args.title;
    this.color = args.color;
    this.items = args.items;
    this.price = args.price;
    this.url = args.url;
  }
}
