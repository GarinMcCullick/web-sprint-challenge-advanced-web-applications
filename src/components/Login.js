import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState({username:"Lambda", password:'School'})
  //console.log("USER STATE",user);
  const [error, setError] = useState('')

  const submitHandler = e => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/login', user)
    .then(res=>{
       //console.log('TOKEN POST',{data:res.data});
        localStorage.setItem("token", res.data.payload);
        this.props.history.push('/BubblePage')
    })
    .catch(err=>{
        console.log(err);
    })
}
    
    // make a post request to retrieve a token from the api--DONE
    // when you have handled the token, navigate to the BubblePage route

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <label>Username:</label>
            <input type="text" data-testid="username" name="username" onChange={e => setUser({...user, username:e.target.value})}value={user.username}></input>
          <label>Password:</label>
            <input type="text" data-testid="password" name="password" onChange={e => setUser({...user, password:e.target.value})}value={user.password}></input>
            <input type="submit" value="submit"></input>
        </form>
        
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
}

export default Login;

//Task List:
//1. Build a form containing a username and password field. ---DONE
//2. Add whatever state nessiary for form functioning. --- DONE
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password" ---DONE
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid. 
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.--DONE