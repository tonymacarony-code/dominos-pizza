import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, cartSelector, cartSelectorById } from '../../redux/slices/cartSlice';
import { ICartItem, PizzaProps } from '../../@types/types';
import { Link } from 'react-router-dom';


const PizzaItem: React.FC<PizzaProps> = ({ id, title, price, imageUrl, types, sizes }) => {
    const typeNames = ['тонкое', 'традиционное'];
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const dispatch = useDispatch();

    const cartItem = useSelector(cartSelectorById(id))
    const count = cartItem ? cartItem.quantity : 0;
    const onClickAdd = () => {
        const item: ICartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
            quantity: 1
        };

        dispatch(addItem(item))
    };
    return (
        <div className="pizza-block">
            <Link to={`/pizza/${id}`}>
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{title}</h4>
            </Link>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type, index) => (
                        <li onClick={() => setActiveType(type)} key={index} className={activeType === index ? 'active' : '0'}>{typeNames[type]}</li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li onClick={() => setActiveSize(index)} key={index} className={activeSize === index ? 'active' : '0'}>{size} см.</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} $</div>
                <div className="button button--outline button--add" onClick={onClickAdd}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {count > 0 && <i>{count}</i>}
                </div>
            </div>
        </div>
    )
}

export default PizzaItem