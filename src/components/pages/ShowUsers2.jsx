import React from 'react'

export default function ShowUsers2(){

    
    return (
        <>
         <div className='row justify-content-center mx-0 my-2'>
            <div className='col-sm-6 rounded shadow'>
                <h2 className='text-center'>Show Users</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>MOBILE</th>
                            <th>CITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Pankaj Kumar</td>
                            <td>pankajkumar@gmail.com</td>
                            <td>8090433558</td>
                            <td>Azmagarh</td>
                            <td><button className='btn btn-danger btn-sm'>Delete</button>&nbsp;
                            <button className='btn btn-warning btn-sm'>&nbsp;Edit&nbsp;</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Vikash Kumar</td>
                            <td>vikashkumar@gmail.com</td>
                            <td>7309908560</td>
                            <td>Azmagarh</td>
                            <td><button className='btn btn-danger btn-sm'>Delete</button>&nbsp;
                            <button className='btn btn-warning btn-sm'>&nbsp;Edit&nbsp;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>
        </>
    )
}