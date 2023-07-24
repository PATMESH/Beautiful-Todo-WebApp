import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import { UserProvider } from './UserContext';
import AddTodos from "./pages/AddTodos";
import Demo from "./components/demo";
import Home from "./components/home";
import EditTodo from "./pages/EditTodos"

function App() {
    return (
      <div>
        <BrowserRouter>
        <UserProvider>
          <Routes>  
            <Route path="/register" element={<Register />} />
            <Route path="/" element={ <Login/> } />
            <Route path="/home" element={<Home/>} />
            <Route exact path="/addtask" element={<AddTodos />} />
            <Route exact path='editTodo/:id' element={<EditTodo/>}/>
          </Routes>
          </UserProvider>
        </BrowserRouter>
      </div>
    );
}

export default App;
