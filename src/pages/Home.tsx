import React, { useCallback, useEffect, useRef } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Layout from '../components/Layout'
import PizzaContainer from '../components/PizzaContainer'
import Pagination from '../components/Pagination/Pagination'
import { useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage, filterSelector } from '../redux/slices/filterSlice'
import { fetchPizzas, pizzaSelector } from '../redux/slices/pizzaSlice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'


const Home: React.FC = () => {
    const { categoryId, sort, method, currentPage, searchValue } = useSelector(filterSelector);
    const { items, status } = useSelector(pizzaSelector)

    const dispatch = useAppDispatch();

    const navigate = useNavigate()

    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const onChangeCategory = useCallback((id: number) => {
        dispatch(setCategoryId(id))
    }, [])

    const getPizzas = async () => {
        const sortMethod = `&order=${method}`;
        const sortBy = sort.type,
            category = categoryId > 0 ? `category=${categoryId}` : '',
            search = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchPizzas({ sortBy, sortMethod, category, search, currentPage }));
    }


    // Если был первый рендер, то проверяем URl-параметры и сохраняем в редуксе
    // useEffect(() => {

    //     if (window.location.search) {

    //         const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzaParams;
    //         const sort = sortList.find((obj) => obj.type === params.sortBy);
    //         dispatch(
    //             setFilters({
    //                 searchValue: params.search,
    //                 categoryId: Number(params.category),
    //                 currentPage: Number(params.currentPage),
    //                 sort: sort || sortList[0],
    //                 method: params.sortMethod === 'asc' ? 'asc' : 'desc',
    //             }),
    //         );
    //         isSearch.current = true;
    //     }
    // }, []);

    // Если был первый рендер, то запрашиваем пиццы
    // useEffect(() => {

    //     window.scrollTo(0, 0);

    //     if (!isSearch.current) {
    //         dispatch(fetchPizzas({} as SearchPizzaParams))
    //     }

    //     isSearch.current = false;

    // }, [categoryId, sort.type, searchValue, currentPage, method]);


    useEffect(() => {
        getPizzas()
    }, [categoryId, sort.type, searchValue, currentPage, method])

    // Если изменили фильтры, то сохраняем их в URL
    // useEffect(() => {

    //     if (isMounted.current) {

    //         const queryString = qs.stringify({
    //             sort: sort.type,
    //             categoryId,
    //             currentPage,
    //             method,
    //         });

    //         navigate(`?${queryString}`);
    //     }
    //     isMounted.current = true;

    // }, [categoryId, sort.type, currentPage, method]);

    return (
        <Layout>

            {status === 'failed' ? (
                <div className="cart cart--empty">
                    <h2>
                        Something goes wrong <span>😕</span>
                    </h2>
                    <p>
                        Unfortunately, we can't load pizzas for you.
                        <br />
                        Please, try again later.
                    </p>
                </div>) : <>
                <div className="content__top">
                    <Categories value={categoryId} onClickCategory={(id: number) => onChangeCategory(id)} />
                    <Sort sort={sort} method={method} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <PizzaContainer pizzas={items} status={status} />
                <Pagination currentPage={currentPage} onChangePage={(num: number) => dispatch(setCurrentPage(num))} />
            </>
            }


        </Layout>

    )
}

export default Home