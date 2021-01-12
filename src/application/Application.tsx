import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../components/Spinner/Spinner";
import { PricingPage } from "../pages/PricingPage/PricingPage";
import { loadTablesAction } from "../redux/actions/TablesActions";
import { ITablesState } from "../redux/reducers/TablesReducer";
import { IApplicationState } from "../redux/store/Store";

export const Application: React.FC = () => {
  const tables = useSelector<IApplicationState, ITablesState>((s) => s.tables);
  const dispath = useDispatch();

  React.useEffect(() => {
    dispath(loadTablesAction());
  }, [dispath]);

  return tables.loading ? (
    <Spinner/>
  ) : tables.error ? (
    <>{"Error"}</>
  ) : (
    <PricingPage />
  );
};
