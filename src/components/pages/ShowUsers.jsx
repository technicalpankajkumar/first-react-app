import React from 'react'
import { redirectRoute } from '../../Router';

export default class ShowUsers extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            mobile:"",
            city:"",
            password:"",
            id:0,
            hide:true,
            users:[]
        }
    }
    fetchData=()=>{
        let record = fetch("http://localhost:3000/users")
        record.then((response) => {
            return response.json()
        })
        .then((result) => {
           if(Array.isArray(result)){
              this.setState({users:result})
           }
        }).catch((error) => {
            console.log(error)
        })
    }
    
    showTableSchema=()=>{
        if(this.state.hide){
          return  <div className='row justify-content-center mx-0 my-2'>
            <div className='col-sm-8 rounded shadow'>
                <h2 className='text-center bg-warning rounded p-2 text-uppercase fw-bold text-white'>Show Users</h2>
                {this.state.msg}
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
                        {this.generateData()}
                    </tbody>
                </table>
            </div>
        </div>
        }else{
            return (
                <div className='row justify-content-center my-3'>
                <div className='col-sm-4 border bg-light rounded shadow'>
                    <h2 className='text-center'>Update Users </h2>
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
                        <center><button type="button" className='btn btn-primary btn-md mt-2' onClick={this.updateData}>Update</button></center>
                    </form>
                </div>
            </div>
            )
        }
    }

    componentDidMount(){
        console.log("this is mount stage")
        this.fetchData()
    }
    componentWillUnmount(){
        console.log("this is unmounts unstage")
    }
    render() {
        return (
            <>  
              {this.showTableSchema()}  
            </>
        )
    }

    generateData = () => {
        let arr = this.state.users
        return arr.map((data,index) => {
            return (
                <tr key={data.id.toString()}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.mobile}</td>
                    <td>{data.city}</td>
                    <td><button className='btn btn-danger btn-sm' type='button' onClick={()=>{this.deleteRecord(data.id)}}>Delete</button>&nbsp;
                        <button className='btn btn-warning btn-sm' type='button' onClick={()=>{this.editRecord(data.id)}}>&nbsp;Edit&nbsp;</button>
                    </td>
                </tr>
            )
        })
    }
    deleteRecord=(id)=>{
        let permission=window.confirm("Are you sure delete the record!!!")
        if(permission){
            fetch(`http://localhost:3000/users/${id}`,{
                method:"DELETE"
            }).then((resp)=>{
                resp.json().then((res)=>{
                    this.setState({msg:<div className='alert alert-danger'>Record Delete successfuly!!!</div>})

                    setTimeout(()=>{
                        this.setState({
                            msg:""
                        })
                    },3000)

                    this.fetchData()
                })
            });
        }
        else{
            this.setState({msg:<div className='alert alert-success'>Thanks for Cancelation!!!</div>})
                    setTimeout(()=>{
                        this.setState({
                            msg:""
                        })
                    },3000)
            this.fetchData()
        }
    }

    editRecord=(id)=>{
        console.log(" id is ",id)
        fetch(`http://localhost:3000/users/${id}`).then((resp)=>{
           resp.json().then((result)=>{
              this.setState({
                name:result.name,
                email:result.email,
                password:result.password,
                city:result.city,
                mobile:result.mobile,
                id:result.id,
                hide:false,
              })
           })
        }).catch((error)=>{console.log(error)})
    }

    updateData=()=>{
        let newObj={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            city:this.state.city,
            password:this.state.password,
            id:this.state.id
        }

        fetch(`http://localhost:3000/users/${this.state.id}`,{
            headers:{
                "Content-Type":"application/json"
        },
        method:"PUT",
        body:JSON.stringify(newObj)
        }).then((resp)=>{
            resp.json().then((res)=>{
                 console.log("data updated!!")
            })
        })
    }
}