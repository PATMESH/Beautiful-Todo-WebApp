import {  useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
  
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/save", {
            userName: userName,
            email: email,
            password: password,
          });
          alert("User Registation Successful");
          navigate("/");
        } catch (err) {
           alert(err);
        }
      }
    return (
    <div>
    <style>{`
    body{
      background: linear-gradient(217deg, rgb(255, 77, 77), rgba(255,0,0,0) 70.71%), 
        linear-gradient(127deg, rgb(75, 255, 75), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgb(52, 52, 255), rgba(0,0,255,0) 70.71%);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
      .container {
        max-width: 500px;
        padding: 20px;
        margin-top:5%;
        margin-bottom:17%;
        border-radius: 8px;
      }
      .card {
        max-width: 500px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 2px 7px 9px grey;
        background-color: rgba(255, 255, 255, 0.7);
      }
      .row {
        margin-bottom: 10px;
      }
      h2 {
        text-align: center;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 20px;
      }
      label {
        font-weight: bold;
      }
      input[type="email"],
      input[type="password"],
      input[type="text"] {
        width: 60%;
        padding: 10px;
        border: 1px solid grey;
        border-radius: 9px;
      }
      `}</style>
    <div className="container"  style={{ width: '900px' }}>
    <div className="card">
            <h1>User Registation</h1>
    <form>
        <div className="form-group">
          <label style={{ textAlign: "center"}}>User name</label>
          <input type="text"  className="form-control" id="userName" placeholder="Enter Name"
          style={{ width: '100%' }}
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          />

        </div>

        <div className="form-group">
          <label>email</label>
          <input type="email"  className="form-control" id="email" placeholder="Enter Email"
          style={{ width: '100%' }}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div className="form-group">
            <label>password</label>
            <input type="password"  className="form-control" id="password" placeholder="Enter password"
             style={{ width: '100%' }}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" className="btn btn-primary mt-4 mb-2"  style={{ width: '150px' }} onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;