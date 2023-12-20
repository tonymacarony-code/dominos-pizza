export type SortType = {
    name: 'популярности' | 'цене' | 'алфавиту',
    type: SortTypesEnum,
}

export enum SortTypesEnum {
    POPULAR = 'popular',
    PRICE = 'price',
    TITLE = 'title',
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    FAILED = 'failed',
}

export interface ICartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageUrl: string;
    type: string;
    size: number;
};

export interface PizzaProps extends Omit<ICartItem, 'type' | 'size'> {
    types: number[];
    sizes: number[];
}

export interface PizzaSliceState {
    status: Status,
    items: PizzaProps[]
}

export interface CartSliceState {
    totalPrice: number,
    items: ICartItem[]
}
export interface FilterSliceState {
    searchValue: string,
    categoryId: number,
    sort: SortType,
    currentPage: number,
    method: string,
}

