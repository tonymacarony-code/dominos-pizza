import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface PizzaItem {
    title: string;
    imageUrl: string;
    price: number;
}

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = useState<PizzaItem>()
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(`https://657b5c9a394ca9e4af143f13.mockapi.io/items/${id}`)
                setPizza(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])

    if (!pizza) {
        return <Layout>Loading...</Layout>
    }

    return (
        <Layout>
            <img src={pizza.imageUrl} alt="" />
            <h1>{pizza.title}</h1>
            <p>{pizza.price}</p>
        </Layout>
    )
}

export default FullPizza