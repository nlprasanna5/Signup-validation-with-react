import React,{ useState } from "react";
import './App.css';

const Signup = () => {

  const [data,setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  
  const {username,email,password,confirmPassword} = data;

  const changeHandler = e => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault();
    if(password === confirmPassword) 
    {
      console.log(data);
    }
    else {
      console.log("Passwords are not matching")
    }
    
  }

  return (
    
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" value={username} onChange={changeHandler} /> <br /> <br />
          <input type="email" name="email" value={email} onChange={changeHandler} /> <br /> <br />
          <input type="password" name="password" value={password} onChange={changeHandler} />  <br /> <br />
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} />  <br /> <br />
          <button type="submit" name="submit" > Submit </button> 
          
        </form>
      </center>
    </div>
    
    

  );
};

export default Signup;