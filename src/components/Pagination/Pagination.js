import React from "react";

import "./Pagination.css";

const Pagination = ({ capsulesPerPage, totalCapsules, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCapsules / capsulesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginate">
      <div className="paginate__container">
        {pageNumbers.map((number) => (
          <div key={number}>
            <span onClick={() => paginate(number)}>{number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
