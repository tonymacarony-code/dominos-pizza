import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { FilterSliceState, SortType, SortTypesEnum } from '../../@types/types'


const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'популярности',
        type: SortTypesEnum.POPULAR,
    },
    currentPage: 1,
    method: 'desc',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },

        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },

        setSort: (state, action: PayloadAction<SortType>) => {
            state.sort = action.payload
        },

        setMethod: (state, action: PayloadAction<string>) => {
            state.method = action.payload
        },

        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },

        setFilters: (state, action: PayloadAction<FilterSliceState>) => {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage)
                state.categoryId = Number(action.payload.categoryId)
                state.sort = action.payload.sort
                state.method = action.payload.method
            } else {
                state.currentPage = 1
                state.categoryId = 0
                state.sort = {
                    name: 'популярности',
                    type: SortTypesEnum.POPULAR,
                }
                state.method = 'desc'
            }

        },

    },
})

export const filterSelector = (state: RootState) => state.filter

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setMethod, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer