import React from "react";
import _ from "lodash";

const Contents = ({ headers, items, sortColumn: column, onSort }) => {
  const raiseSort = path => {
    console.log(path);
    const sortColumn = { ...column };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
      onSort(sortColumn);
    }
  };

  const showData = ["name", "features.name", "pricing"];
  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.id} onClick={() => raiseSort(header.path)}>
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.pricing}>
              {showData.map(data => (
                <td key={item._id}>{_.get(item, data)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contents;
