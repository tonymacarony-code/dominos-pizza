import React from 'react'
import { ICartItem } from '../@types/types'

export const calcTotalPrice = (items: ICartItem[]) => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
}
