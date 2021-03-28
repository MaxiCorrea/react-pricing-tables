import * as React from "react";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { Table } from "../../components/Table/Table";
import { TableButton } from "../../components/TableButton/TableButton";
import { TableHeader } from "../../components/TableHeader/TableHeader";
import { TableItem } from "../../components/TableItem/TableItem";
import { TableItems } from "../../components/TableItems/TableItems";
import { TablePrice } from "../../components/TablePrice/TablePrice";
import { TableSection } from "../../components/TableSection/TableSection";
import { TableWrap } from "../../components/TableWrap/TableWrap";
import { ITablesState } from "../../redux/reducers/TablesReducer";
import { IApplicationState } from "../../redux/store/Store";

export const PricingPage: React.FC = () => {
  const tables = useSelector<IApplicationState, ITablesState>((s) => s.tables);
  return (
    <>
      {tables.rows.length !== 0 ? (
        <>
          <Header title={"Pricing Tables"} subtitle={"My services"} />
          <TableSection>
            <TableWrap>
              {tables.rows.map((table, key) => (
                <Table key={key}>
                  <TableHeader
                    title={table.title}
                    color={table.color}
                  />
                  <TableItems>
                    {table.items.map((item, key) => (
                      <TableItem text={item.text} key={key} />
                    ))}
                  </TableItems>
                  <TablePrice price={table.price} />
                  <TableButton
                    href={table.url}
                    caption={"Purcharse"}
                    color={table.color}
                  />
                </Table>
              ))}
            </TableWrap>
          </TableSection>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
