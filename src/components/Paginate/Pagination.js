import React from "react";
import "./Pagination.scss";

const Pagination = ({
  procutsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / procutsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div className="page-num-wrap" key={number}>
            <h2
              className={currentPage === number ? "active-page" : "page-num"}
              onClick={() => paginate(number)}
            >
              {number.toLocaleString("fa-ir")}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
