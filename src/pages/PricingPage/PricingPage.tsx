import * as React from "react";
import { Header } from "../../components/Header/Header";
import { Table } from "../../components/Table/Table";
import { TableButton } from "../../components/TableButton/TableButton";
import { TableHeader } from "../../components/TableHeader/TableHeader";
import { TableItem } from "../../components/TableItem/TableItem";
import { TableItems } from "../../components/TableItems/TableItems";
import { TablePrice } from "../../components/TablePrice/TablePrice";
import { TableSection } from "../../components/TableSection/TableSection";
import { TableWrap } from "../../components/TableWrap/TableWrap";

export const PricingPage: React.FC = () => {
  return (
    <>
      <Header title={"Title"} subtitle={"subtitle"} />
      <TableSection>
        <TableWrap>
          <Table>
            <TableHeader title={"Basic"} />
            <TableItems>
              <TableItem text={"50 Emails"} />
              <TableItem text={"5GB Disk Space"} />
              <TableItem text={"5GB Bandwidth"} />
              <TableItem text={"Unlimited Domains"} />
            </TableItems>
            <TablePrice price={124} />
            <TableButton caption={"Purcharse"} />
          </Table>

          <Table>
            <TableHeader title={"Basic"} />
            <TableItems>
              <TableItem text={"50 Emails"} />
              <TableItem text={"5GB Disk Space"} />
              <TableItem text={"5GB Bandwidth"} />
              <TableItem text={"Unlimited Domains"} />
            </TableItems>
            <TablePrice price={124} />
            <TableButton caption={"Purcharse"} />
          </Table>

          <Table>
            <TableHeader title={"Basic"} />
            <TableItems>
              <TableItem text={"50 Emails"} />
              <TableItem text={"5GB Disk Space"} />
              <TableItem text={"5GB Bandwidth"} />
              <TableItem text={"Unlimited Domains"} />
            </TableItems>
            <TablePrice price={124} />
            <TableButton caption={"Purcharse"} />
          </Table>
        </TableWrap>
      </TableSection>
    </>
  );
};
