import { Table } from "../../domains/Table";

export enum TablesTypes {
  LOADING = "TABLES/LOADING",
  SUCCESS = "TABLES/SUCCESS",
  ERROR = "TABLES/ERROR",
}

export interface ITablesLoading {
  type: TablesTypes.LOADING;
}

export interface ITablesSuccess {
  type: TablesTypes.SUCCESS;
  payload: Table[];
}

export interface ITablesError {
  type: TablesTypes.ERROR;
}

export type TablesActions = ITablesLoading | ITablesSuccess | ITablesError;
