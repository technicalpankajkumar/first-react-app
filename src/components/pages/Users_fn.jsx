import React,{useState} from 'react'

export default function Users_fn(){
    const [name,setname]=useState('pankaj');
    return (
        <>
        <div className='container'>
            <div className='row justify-content-center my-3'>
                <div className='col-sm-4 border bg-light rounded shadow'>
                    <h2 className='text-center'>Register Users </h2>
                    <form className='py-3'>
                        <label className='lable'>Name</label>
                        <input type="text" value={name} className="form-control"/>
                        <label className='lable'>Email</label>
                        <input type="text" className="form-control"/>
                        <label className='lable'>Mobile</label>
                        <input type="text" className="form-control"/>
                        <label className='lable'>City</label>
                        <input type="text" className="form-control"/>
                        <label className='lable'>Password</label>
                        <input type="text" className="form-control"/>
                        <center><button className='btn btn-warning btn-md mt-2'>SUBMIT</button></center>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}