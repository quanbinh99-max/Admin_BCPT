import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { statePage } from "../../../../../store/StatePage";
import { useRecoilState } from "recoil";

Pagination.propTypes = {};

function Pagination({ total_page }) {
  const [page, setPage] = useRecoilState(statePage);
  const handlePageClick = (event) => {
    setPage({ ...page, page: event.selected + 1 });
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={total_page}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"inline-flex items-center -space-x-px"}
        pageClassName={
          "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        previousLinkClassName={
          "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        nextClassName={
          "block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        activeClassName={"text-stone-50 bg-cyan-600"}
      />
    </div>
  );
}

export default Pagination;
