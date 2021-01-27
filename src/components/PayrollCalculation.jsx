import React from "react";
import { Table } from "reactstrap";
import { formatTaxTableHeader } from "../utils/formatStrings";

const PayrollCalculation = ({ data, onSelectRow }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Cost elements</th>
          <th>Monthly</th>
          <th>Annual</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data)
          .filter((f) => f !== "total_payment")
          .map((item, index) => {
            const itemData = data[item];
            const isItemNaN = isNaN(itemData);

            return (
              <tr
                key={`item-${index}`}
                onClick={() =>
                  isItemNaN ? onSelectRow(itemData) : onSelectRow(null)
                }
                className={isItemNaN ? "clickable-row" : ""}
              >
                <td key={`item-${index}`}>{formatTaxTableHeader(item)}</td>
                <td>{isItemNaN ? itemData.total : itemData}</td>
                <td>
                  {isItemNaN
                    ? (itemData.total * 12).toFixed(2)
                    : (itemData * 12).toFixed(2)}
                </td>
              </tr>
            );
          })}
        <tr>
          <th>TOTAL</th>
          <th>{data.total_payment}</th>
          <th>{(data.total_payment * 12).toFixed(2)}</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default PayrollCalculation;
