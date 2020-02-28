import React from "react";
import _ from "lodash";

const TableBody = ({ items, showData }) => {
  return (
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          {showData.map(data => (
            <td key={item.id + data}>{_.get(item, data)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
