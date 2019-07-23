import React from 'react'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a href="#" className="navbar-brand">React Boilerplate</a>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Users</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Add User</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar