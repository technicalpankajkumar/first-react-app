import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <>
                <div className='container-fluid bg-dark'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <nav className="navbar navbar-expand-lg bg-dark">
                                <div className="container-fluid">
                                    <a className="navbar-brand text-white text-uppercase fw-bold" href="#">react app</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                            <li className="nav-item">
                                                <a className="nav-link text-white" aria-current="page" href="#home">HOME</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white" href="#showusers">SHOW-USERS</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white" href='#createusers'>CREATE USERS</a>
                                            </li>
                                        </ul>
                                        {/* <form className="d-flex" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form> */}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;