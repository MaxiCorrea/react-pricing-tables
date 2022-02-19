import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../components/Spinner/Spinner";
import { PricingPage } from "../pages/PricingPage/PricingPage";
import { loadTablesAction } from "../redux/actions/TablesActions";
import { ITablesState } from "../redux/reducers/TablesReducer";
import { IApplicationState } from "../redux/store/Store";

export const Application: React.FC = () => {

  const tablesState = useSelector<
    IApplicationState, 
    ITablesState
  >((state) => state.tables);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadTablesAction());
  }, [dispatch]);

  return tablesState.loading ? (
    <Spinner />
  ) : tablesState.error ? (
    <>{"Error"}</>
  ) : (
    <PricingPage />
  );
};
