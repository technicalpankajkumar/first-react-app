import React from 'react'
function Home(){
    return (
        <>
         <div className="container-fluid">
            <div className='row'>
                <div className='col-sm-6 p-5'>
                    <h2>My first React App</h2>
                    <p style={{textAlign:"justify"}}>
                    React is a free and open-source front-end JavaScript library for 
                    building user interfaces based on UI components. It is maintained 
                    by Meta and a community of individual developers and companies.
                    </p>
                    <button className='btn btn-md btn-success'>Visit Github</button>
                </div>
                <div className='col-sm-6 text-center'>
                    <img src="logo512.png" className='img-fluid'/>
                </div>
            </div>
         </div>
        </>
    )
}

export default Home;