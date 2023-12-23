import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzaProps, PizzaSliceState, SearchPizzaParams, SortType, Status } from '../../@types/types'
import { RootState } from '../store'

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
}


export const fetchPizzas = createAsyncThunk<PizzaProps[], SearchPizzaParams>(
    'pizza/fetch', async (params) => {
        const { sortBy, sortMethod, category, search, currentPage } = params
        const { data } = await axios.get<PizzaProps[]>(`https://657b5c9a394ca9e4af143f13.mockapi.io/items?&page=${currentPage}&limit=12&${category}&sortBy=${sortBy}${sortMethod}${search}`)
        return data;
    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<PizzaProps[]>) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
        });
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.FAILED
            state.items = []
        });
    }

})

export const pizzaSelector = (state: RootState) => state.pizza

// Action creators are generated for each case reducer function
export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer