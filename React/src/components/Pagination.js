import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const PAGE_BUTTONS = 10; // Number of pagination buttons to show
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Determine the range of page numbers to display
  const getVisiblePages = () => {
    if (totalPages <= PAGE_BUTTONS) {
      return pageNumbers;
    }

    const start = Math.max(1, currentPage - Math.floor(PAGE_BUTTONS / 2));
    const end = Math.min(totalPages, start + PAGE_BUTTONS - 1);

    let visiblePages = [];
    if (start > 1) {
      visiblePages.push(1);
      if (start > 2) visiblePages.push('...');
    }
    visiblePages = visiblePages.concat(pageNumbers.slice(start - 1, end));
    if (end < totalPages) {
      if (end < totalPages - 1) visiblePages.push('...');
      visiblePages.push(totalPages);
    }
    return visiblePages;
  };

  const handlePageClick = (page) => {
    if (page !== '...' && page !== currentPage) {
      onPageChange(page);
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-btn prev-next-btn"
      >
        Previous
      </button>
      {visiblePages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(page)}
          className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-btn prev-next-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
