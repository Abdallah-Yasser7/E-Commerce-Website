import React from "react";
import ReactPaginate from "react-paginate";

export const PaginationComponent = () => {
  const handlePageClick = () => {};
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={100}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      pageLinkClassName={"page-link"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      // pageClassName={"page-item"}
      // previousClassName={"page-item"}
      // nextClassName={"page-item"}
      // breakClassName={"page-item"}
    />
  );
};
