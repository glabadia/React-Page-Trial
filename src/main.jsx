import React from "react";
import ListGroup from "./components/listGroup";
import Contents from "./components/contents";
import NavBar from "./components/navbar";

const Main = () => {
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
          <Contents />
        </div>
      </div>
    </>
  );
};

export default Main;
