import React from "react";

const Sort = ({ data = [], onSort }) => {
  const handleSort = (e) => {
    const value = e.target.value;

    if (!Array.isArray(data)) return;

    let sorted = [...data];

    if (value === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    onSort(sorted);
  };

  return (
    <div className="d-flex justify-content-end my-3">
      <select className="form-select w-auto" onChange={handleSort} defaultValue="">
       
          All Products
        
      </select>
    </div>
  );
};

export default Sort;
