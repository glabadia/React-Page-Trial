import React from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

const Contents = ({ headers, items, sortColumn: column, onSort }) => {
  const showData = ["name", "features.name", "pricing"];

  return (
    <div>
      <table className="table table-sm">
        <TableHeader sortColumn={column} onSort={onSort} columns={headers} />
        <TableBody items={items} showData={showData} />
      </table>
    </div>
  );
};

export default Contents;
