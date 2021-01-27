import React from "react";
import { Table } from "reactstrap";

const TaxDetails = ({ data }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Costo</th>
        </tr>
      </thead>
      <tbody>
        {data.taxedItems.map((item, index) => {
          return (
            <tr key={`taxedItem-${index}`}>
              <td>{item.concept}</td>
              <td>{item.value}</td>
            </tr>
          );
        })}
        <tr>
          <th>SUB-TOTAL</th>
          <th>{data.total}</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default TaxDetails;
