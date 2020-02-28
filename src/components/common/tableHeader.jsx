import React from "react";

const TableHeader = ({ sortColumn: currentColumn, columns, onSort }) => {
  const raiseSort = path => {
    console.log(path);
    const sortColumn = { ...currentColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  const renderSortIcon = column => {
    if (currentColumn.path !== column.path) return null;
    if (currentColumn.order === "asc") return "▲";
    return "▼";
  };

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.id} onClick={() => raiseSort(column.path)}>
            {column.name}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
