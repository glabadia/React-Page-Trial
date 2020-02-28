import React from "react";

const ListGroup = () => {
  const categories = [
    { _id: 1, name: "Studio" },
    { _id: 2, name: "Standard" },
    { _id: 3, name: "Business" },
    { _id: 4, name: "Corporate" }
  ];
  return (
    <div>
      <ul className="list-group">
        {categories.map(category => (
          <li key={category._id} className="list-group-item">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
