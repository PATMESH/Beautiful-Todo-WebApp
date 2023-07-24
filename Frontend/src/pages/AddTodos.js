import React,{useState , useContext} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";
import { UserContext } from '../UserContext';

export default function AddTodos() {

    let navigate = useNavigate();
    const { user } = useContext(UserContext);

    const [Todo , setTodos] = useState({
        title : "",
        description :"",
        important :false,
    })

    const{title,description,important} = Todo

    const onInputChange=(e)=>{
        setTodos({...Todo,[e.target.name]: e.target.value});
    }

    if (Todo.important == "true") {
        Todo.important = true;
      }      

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:8080/api/v1/user/todos/${user.id}`,Todo);
        navigate("/home");
    };
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
       <div className="container-fluid">
         <a className="navbar-brand" href={"/home"}>Full Stack Todo Application</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="btn btn-outline-light" to={"/addtask"}>Add a task</Link>
        </div>
      </nav>
 </div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>New Task</h2>

            <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-4'>
                <label htmlFor='name' className='form-label'>
                    Task Title
                </label>
                <input
                type={"text"}
                className="form-control "
                placeholder="try typing some new task"
                name='title' 
                defaultValue={title}
                onChange = {(e)=>onInputChange(e)}
                />

            </div>
            <div className='mb-4 '>
                <label htmlFor='name' className='form-label'>
                    Description
                </label>
                <input
                type={"text"}
                className="form-control "
                placeholder="try typing some new task"
                name='description' 
                    value={description}
                    onChange = {(e)=>onInputChange(e)}
                /> 
            </div>
            <div>
            <input
                type="radio"
                className="btn-check"
                name="important"
                id="success-outlined"
                autoComplete="off"
                checked={important}
                value={true}
                onChange={(e) => onInputChange(e)}
            />

            <label className="btn btn-outline-success " for="success-outlined">Important⭐</label>
             </div>
              <button type="submit" className="btn btn-outline-primary mt-4">Add Task</button>
              <Link className="btn btn-outline-danger mt-4 mx-2" to={"/home"}>cancel</Link>
              </form>
            </div> 
        </div>
    </div>
    </>
  )
}
