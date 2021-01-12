import { Button } from "./Button";
import { Header } from "./Header";
import { Item } from "./Item";
import { Price } from "./Price";

export interface ITable {
  header: Header;
  items: Item[];
  price: Price;
  button: Button;
}

export class Table {
  header: Header;
  items: Item[];
  price: Price;
  button: Button;
  constructor(args: ITable) {
    this.header = args.header;
    this.items = args.items;
    this.price = args.price;
    this.button = args.button;
  }
}
