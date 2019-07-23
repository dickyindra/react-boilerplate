import React from 'react'
import className from 'classnames'
import { Link } from 'react-router-dom'

import NavbarContainer from './container'
import navbarMenu from '@/data/navbar-menu'

const Navbar = (props) => {
    const pathname = props.location.pathname

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">React Boilerplate</a>

                <ul className="navbar-nav ml-auto">
                    {navbarMenu.map((menu, index) => {
                        return (
                            <li className={className('nav-item', { 'active': pathname == menu.to })}>
                                <Link className="nav-link" to={menu.to}>{menu.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavbarContainer(Navbar)