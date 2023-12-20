import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
    onChangePage: (page: number) => void;
    currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ onChangePage, currentPage }) => (
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        forcePage={currentPage - 1}
        pageCount={3}
        renderOnZeroPageCount={null}
    />
);

export default Pagination;