import React from 'react'

class Footer extends React.Component{
    render(){
        return (
            <div className='container-fluid bg-dark text-white'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h2>Footer</h2>
                        <ul className="list-unstyled">
                            <li className=''>Home</li>
                            <li className=''>About</li>
                            <li className=''>Contact</li>
                            <li className=''>Service</li>
                        </ul>
                    </div>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4'></div>
                </div>
                <hr/>
                <div className='row text-white bg-dark'>
                    <div className='col-sm-6 py-2'>
                        <span>&copy;Copyright by <b>PANKAJ KUMAR</b></span>
                    </div>
                    <div className='col-sm-6 text-end py-2'>
                        <span>&reg; Developed by <b>Developers-ways Company</b></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;