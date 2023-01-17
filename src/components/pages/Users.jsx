import React from 'react'
import { redirectRoute } from '../../Router';
export default class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            mobile:"",
            city:"",
            password:"",
            msg:""
        }
    }
    render(){
        console.log(this.props)
    return (
        <>
        <div className='container'>
            <div className='row justify-content-center my-3'>
                <div className='col-sm-4 border bg-light rounded shadow'>
                    <h2 className='text-center'>Register Users </h2>
                    {this.state.msg}
                    <form className='py-3'>
                        <label className='lable'>Name</label>
                        <input type="text" value={this.state.name} onChange={(event)=>{ this.setState({name:event.target.value})}} className="form-control"/>
                        <label className='lable'>Email</label>
                        <input type="text"  value={this.state.email} onChange={(event)=>{ this.setState({email:event.target.value})}} className="form-control"/>
                        <label className='lable'>Mobile</label>
                        <input type="text" value={this.state.mobile} onChange={(event)=>{this.setState({mobile:event.target.value})}} className="form-control"/>
                        <label className='lable'>City</label>
                        <input type="text" value={this.state.city} onChange={(event)=>{ this.setState({city:event.target.value})}} className="form-control"/>
                        <label className='lable'>Password</label>
                        <input type="text" value={this.state.password} onChange={(event)=>{ this.setState({password:event.target.value})}} className="form-control"/>
                        <center><button type="button" className='btn btn-warning btn-md mt-2' onClick={this.saveData}>SUBMIT</button></center>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

saveData=()=>{

    let newObj={
        name:this.state.name,
        email:this.state.email,
        mobile:this.state.mobile,
        city:this.state.city,
        password:this.state.password
    }
      let promise=fetch("http://localhost:3000/users",{
        headers:{
            "Content-Type":"application/json",
        },
        method:"POST",
        body:JSON.stringify(newObj),
      })
      promise.then((response)=>{
        if(response.ok){
            this.setState({
                name:"",
                email:"",
                mobile:"",
                city:"",
                password:"",
                // msg:<div className='alert alert-success'>User Created Successfuly!!!</div>  //user with setTimeout()
            })
        }
        // setTimeout(()=>{
        //     this.setState({
        //         msg:""
        //     })
        // },3000)
        return redirectRoute('showusers')

      }).then((result)=>{
        console.log("Form submited successfuly!!!")
      }).catch((error)=>{
        if(error){
            this.setState({
                msg:<div className='alert alert-danger'>Server Error please try again!!!</div>  //user with setTimeout()
            })
        }
        setTimeout(()=>{
            this.setState({
                msg:""
            })
        },5000)
      })
}
}