import Dashboard from "./Dashboard";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../App";

const Login = () => {
  const[name, setName]= useContext(store);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const [flag, setFlag] = useState(false)

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName && password) {
      const newEntry = { userName: userName, password: password };
      setName(userName);
      
      setAllEntry([...allEntry, newEntry]);

      setUsername("");
      setPassword("");

      setFlag(true)
    } else {
      alert("Fill the data");
    }
  };
  const gotoDashboard = () => { 
    if(flag){
      navigate("/Dashboard");
    }
   
  };
useEffect(()=>{
  gotoDashboard()
},[flag]);




  return (
    <div className="form">
      {/* <Dashboard userame={userName} /> */}
      <form className="login" onSubmit={submitHandler}>
              <h1 className="create-heading">Login Page</h1>

        <div className="input">
          <label className="labels">Username:</label>

          <input
            type="text"
            name="username"
            value={userName}
            placeholder="User Name.."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="error-label"></label>
        </div>

        <div className="input" id="pw-div">
          <label className="labels">Password: </label>

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="error-label"></label>
        </div>

        <div className="btn">
          <button onClick={gotoDashboard()}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
