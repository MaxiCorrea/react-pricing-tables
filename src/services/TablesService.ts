import { IButton } from "../domains/Button";
import { Header, IHeader } from "../domains/Header";
import { IItem, Item } from "../domains/Item";
import { IPrice, Price } from "../domains/Price";
import { ITable, Table } from "../domains/Table";

export class TablesService {
  static async getTables(): Promise<Table[]> {
    const h1Args: IHeader = {
      title: "Basic",
      color: "basic",
    };
    const h2Args: IHeader = {
      title: "Enterprice",
      color: "enterprice",
    };
    const h3Args: IHeader = {
      title: "Standard",
      color: "standard",
    };
    const header1 = new Header(h1Args);
    const header2 = new Header(h2Args);
    const header3 = new Header(h3Args);
    const item1: IItem = { text: "50 Emails" };
    const item2: IItem = { text: "5GB Disk Space" };
    const item3: IItem = { text: "5GB Bandwidth" };
    const item4: IItem = { text: "Unlimited Domains" };
    const items: Item[] = [];
    items.push(new Item(item1));
    items.push(new Item(item2));
    items.push(new Item(item3));
    items.push(new Item(item4));
    const priceValue: IPrice = {
      value: 140,
    };
    const price = new Price(priceValue);
    const button1: IButton = {
      caption: "Purcharse",
      color: "basic",
      href: window.location.toString(),
    };
    const button2: IButton = {
      caption: "Purcharse",
      color: "enterprice",
      href: window.location.toString(),
    };
    const button3: IButton = {
      caption: "Purcharse",
      color: "standard",
      href: window.location.toString(),
    };
    const table1: ITable = {
      header: header1,
      items: items,
      price: price,
      button: button1,
    };
    const table2: ITable = {
      header: header2,
      items: items,
      price: price,
      button: button2,
    };
    const table3: ITable = {
      header: header3,
      items: items,
      price: price,
      button: button3,
    };
    const tables: Table[] = [];
    tables.push(table1);
    tables.push(table2);
    tables.push(table3);
    return tables;
  }
}
