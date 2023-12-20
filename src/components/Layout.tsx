import React, { ReactNode } from 'react'
import Header from './Header'

type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (

        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Layout