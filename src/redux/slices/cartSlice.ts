import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartSliceState, ICartItem } from '../../@types/types'
import { RootState } from '../store'
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage'
import { calcTotalPrice } from '../../utils/calcTotalPrice'



const { items, totalPrice } = getCartFromLocalStorage() as CartSliceState;

const initialState: CartSliceState = {
    totalPrice,
    items
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.items.find(item => item.id === action.payload.id)

            if (findItem) {
                findItem.quantity++
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            state.totalPrice = calcTotalPrice(state.items)
        },

        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find(item => item.id === action.payload)
            if (findItem && findItem.quantity > 1) {
                findItem.quantity--
                state.totalPrice = calcTotalPrice(state.items)
            }
        },

        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            state.totalPrice = calcTotalPrice(state.items)
        },

        clearItems: (state) => {
            state.items = []
            state.totalPrice = 0
        },

    },
})

export const cartSelector = (state: RootState) => state.cart
export const cartSelectorById = (id: string) => (state: RootState) => state.cart.items.find(item => item.id === id)

// Action creators are generated for each case reducer function
export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer