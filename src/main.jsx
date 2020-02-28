import React, { useState, useEffect } from "react";
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
  const [currentHouseFilter, setHouseFilter] = useState("");
  const [houseCategories, setHouseCategories] = useState([
    { _id: 1, name: "Studio" },
    { _id: 2, name: "Standard" },
    { _id: 3, name: "Business" },
    { _id: 4, name: "Corporate" }
  ]);

  useEffect(
    () => setHouseCategories([{ name: "All", _id: "" }, ...houseCategories]),
    []
  );

  const handlePageChange = page => {
    console.log(page);
    setCurrentPage(page);
  };

  const handleSortColumn = sortColumn => {
    setSortColumn(sortColumn);
  };

  const handleHouseFilter = houseType => {
    setHouseFilter(houseType._id);
    console.log(currentHouseFilter);
  };

  const filtered = currentHouseFilter
    ? houses.filter(house => house.features._id === currentHouseFilter)
    : houses;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const paged = paginate(sorted, currentPage, pageSize);

  return (
    <>
      <div className="row-1">
        <NavBar />
      </div>
      <div className="row">
        <div className="col-2">
          <ListGroup
            categories={houseCategories}
            onHouseFilter={handleHouseFilter}
            selectedHouseFilter={currentHouseFilter}
          />
        </div>
        <div className="col">
          Showing {filtered.length} units available for sale.
          <Contents
            headers={headers}
            items={paged}
            sortColumn={sortColumn}
            onSort={handleSortColumn}
          />
          <Pagination
            itemsCount={filtered.length}
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
