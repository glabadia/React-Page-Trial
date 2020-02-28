import React, { useState } from "react";
import ListGroup from "./components/listGroup";
import Contents from "./components/contents";
import NavBar from "./components/navbar";

import { headers, houses } from "./services/listHouses";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";
import _ from "lodash";

const Main = () => {
  const [pageSize, setPageSize] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  const handlePageChange = page => {
    console.log(page);
    setCurrentPage(page);
  };

  const handleSortColumn = sortColumn => {
    setSortColumn(sortColumn);
  };

  const sorted = _.orderBy(houses, [sortColumn.path], [sortColumn.order]);

  const paged = paginate(sorted, currentPage, pageSize);

  return (
    <>
      <div className="row-1">
        <NavBar />
      </div>
      <div className="row">
        <div className="col-2">
          <ListGroup />
        </div>
        <div className="col">
          <Contents
            headers={headers}
            items={paged}
            sortColumn={sortColumn}
            onSort={handleSortColumn}
          />
          <Pagination
            itemsCount={houses.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
