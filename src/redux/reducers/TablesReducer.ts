import { Reducer } from "redux";
import { Table } from "../../domains/Table";
import { TablesTypes } from "../types/TablesTypes";
import { TablesActions } from "../types/TablesTypes";

export interface ITablesState {
  readonly rows: Table[];
  readonly loading: boolean;
  readonly error: boolean;
}

const initialState: ITablesState = {
  rows: [],
  loading: false,
  error: false,
};

export const TablesReducer: Reducer<ITablesState, TablesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TablesTypes.LOADING: {
      return {
        rows: [],
        loading: true,
        error: false,
      };
    }
    case TablesTypes.SUCCESS: {
      return {
        rows: action.payload,
        loading: false,
        error: false,
      };
    }
    case TablesTypes.ERROR: {
      return {
        rows: [],
        loading: false,
        error: true,
      };
    } 
    default : {
      return initialState;
    }
  }
};
