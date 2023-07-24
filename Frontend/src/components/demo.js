import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect , useContext } from "react";
import { useState } from "react";
import { UserContext } from '../UserContext';

function Demo() {
  const { user } = useContext(UserContext);
    const [userName, setUserName] = useState("");
    return (
      <div>
       <h1>Hello {user.id} </h1>
      </div>
    );
  }
  
  export default Demo;