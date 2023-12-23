import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../redux/slices/cartSlice';
import { pizzaSelector } from '../../redux/slices/pizzaSlice';

type PaginationProps = {
    onChangePage: (page: number) => void;
    currentPage: number;
};


const Pagination: React.FC<PaginationProps> = ({ onChangePage, currentPage }) => {

    const { items } = useSelector(pizzaSelector);

    console.log(items, 'items');
    console.log(items.length, 'items length');
    console.log(Math.round(items.length / 4), 'items length / 4');
    console.log(Math.round(items.length / 8), 'items length / 8');
    console.log(Math.ceil(items.length / 12), 'items length / 12');

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            forcePage={currentPage - 1}
            pageCount={2}
            renderOnZeroPageCount={null}
        />
    )
};

export default Pagination;