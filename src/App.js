import React, { useState } from 'react';
import LoginForm from './LoginForm'; 

const App=()=>{
  const adminUser={
    name:"admin",
    password:"admin123"
  }

  const[user,setUser]=useState({name:"",password:""});
  const[error,setError]=useState("");

  const Login=details=>{
    console.log(details);
    if(details.name==adminUser.name && details.password==adminUser.password)
    {
      console.log("Logged In");
      setUser(
        {
          name:details.name,
          password:details.password
        }
      );
    }
    else{
      setError("Details Do not match!");
    }
  }

  const Logout=()=>{
    setUser({name:"",password:""});
  }


  return(
    <div className="App">
        {(user.name !="")?(
          <div className="welcome">
            <h2>Welcome,<span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ):(
          <LoginForm Login={Login} error={error}/>
        )}
    </div>
  )
}

export default App;