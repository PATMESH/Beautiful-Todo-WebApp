import {  useState  , useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from "axios";
import React from "react";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    function register() {
        navigate("/register");
    }
    const call=async(emailId)=>{
      const user = await axios.get(`http://localhost:8080/api/v1/user/name/${emailId}`);
      setUser(user.data);
      console.log(user.data);
      navigate("home");
  }
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             if (res.data.message === "Email not exits") 
             {
               alert("Email not exits");
               navigate("/register")
             } 
             else if(res.data.message === "Login Success")
             {
              call(email);
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.log();
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }
   
    return (
      <>
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
        max-width: 400px;
        padding: 20px;
        margin-top:8%;
        margin-bottom:18%;
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
      input[type="password"] {
        width: 100%;
        padding: 10px;
        border: 1px solid grey;
        border-radius: 9px;
      }
    `}</style>
       <div>
            <div className="container">
            <div className="row">
                <h2>Login</h2>
             <hr/>
             </div>

             <div className="row">
             <div >
 
            <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email"  className="form-control" id="email" placeholder="Enter Name"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />

        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password"  className="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" className="btn btn-primary" onClick={login} >Login</button><>  </>
                  <button type="submit" className="btn btn-danger" onClick={register}>Register</button>
              </form>

            </div>
            </div>
            </div>

     </div>
     </>
    );
  }
  
  export default Login;