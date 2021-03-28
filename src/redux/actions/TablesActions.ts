import { ThunkAction } from "redux-thunk";
import { ActionCreator, Dispatch } from "redux";
import { TablesService } from "../../services/TablesService";
import { ITablesState } from "../reducers/TablesReducer";
import { TablesActions, TablesTypes } from "../types/TablesTypes";

export const loadTablesAction: ActionCreator<ThunkAction<
  Promise<void>,
  ITablesState,
  null,
  TablesActions
>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: TablesTypes.LOADING });
    TablesService.getTables().then((tables) => {
      if (tables.length > 0) {
        dispatch({
          type: TablesTypes.SUCCESS,
          payload: tables,
        });
      } else {
        dispatch({ type: TablesTypes.ERROR });
      }
    });
  };
};
