import React, { memo } from 'react'


type CategoriesProps = {
    value: number;
    onClickCategory: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = memo(({ value, onClickCategory }) => {

    const items = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]
    return (
        <div className="categories">
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={value === index ? 'active' : ''} onClick={() => onClickCategory(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Categories