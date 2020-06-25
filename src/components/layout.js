import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './navBar';

const Layout = ({ children }) => {

    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;