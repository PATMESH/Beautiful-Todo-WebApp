import React,{useEffect, useState , useContext} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";
import { UserContext } from '../UserContext';

export default function AddTodos() {
    const{id} = useParams();
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

    if(Todo.important == "true"){
        Todo.important = true;
    }
    useEffect(() =>{
        loadTodos()
    },[])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/user/todos/${id}`,Todo);
        navigate("/home");
    };

    const loadTodos = async() =>{
        const result = await axios.get(`http://localhost:8080/api/v1/user/todo/${id}`);
        setTodos(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Edit Task</h2>

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
            <input type="radio" className="btn-check" name="important" id="success-outlined" autocomplete="off"
             value={true} onChange = {(e)=>onInputChange(e)}
              />
<label className="btn btn-outline-success " for="success-outlined">Important⭐</label>
             </div>
              <button type="submit" className="btn btn-outline-primary mt-4">Add Task</button>
              <Link className="btn btn-outline-danger mt-4 mx-2" to="/">cancel</Link>
              </form>
            </div> 
        </div>
    </div>
  )
}