import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const NotFound: React.FC = () => {
    return (
        <Layout>
            <h1>404</h1>
            <p>
                Page not found
            </p>
            <Link to="/">Go back to home</Link>
        </Layout>
    )
}

export default NotFound