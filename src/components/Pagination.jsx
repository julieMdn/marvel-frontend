import React from "react";
import "./pagination.css";

const Pagination = ({
  charactersPerPage,
  totalCharacters,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    const previousPage = currentPage > 0 ? currentPage - 1 : pageNumbers.length;
    paginate(previousPage);
  };

  const handleNext = () => {
    const nextPage = currentPage < pageNumbers.length ? currentPage + 1 : 1;
    paginate(nextPage);
  };

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={handlePrevious}
            className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? "active" : ""}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={handleNext}
            className={`page-link ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
