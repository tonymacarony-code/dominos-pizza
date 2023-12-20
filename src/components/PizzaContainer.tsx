import React from 'react'
import PizzaItem from './PizzaItem/PizzaItem'
import Skeleton from './PizzaItem/Skeleton'
import { PizzaProps } from '../@types/types';

type PizzaContainerProps = {
    pizzas: PizzaProps[];
    status: string;
}

const PizzaContainer: React.FC<PizzaContainerProps> = ({ pizzas, status }) => {
    const items = pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)
    const skeletons = [...new Array(12)].map((item, index) => <Skeleton key={index} />)
    return (
        <div className="content__items">

            {status === 'loading'
                ? skeletons
                : items
            }

        </div>
    )
}

export default PizzaContainer