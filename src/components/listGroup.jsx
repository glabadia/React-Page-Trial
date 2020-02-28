import React from "react";

const ListGroup = ({ categories, onHouseFilter, selectedHouseFilter }) => {
  return (
    <div>
      <ul className="list-group">
        {categories.map(category => (
          <li
            key={category._id}
            className={
              selectedHouseFilter === category._id
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onHouseFilter(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
