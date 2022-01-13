import React, {useState} from 'react';
import LoginForm from './component/LoginForm';
function App() {
  const adminUser ={ // the place where we chack the login details
 email:"admin@gmail.com",
 password:"admin@123"
  }

  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");

  const Login =details =>{
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      });
    }else{
      console.log("details don't match");
      setError("details don't match");
    }
  }

  const Logout =() => {
    setUser({name:"",email:""});
    setError("");
  }

  return (
    <div className="App">
      {(user.email !=="") ? (
        <div className="welcome">
          <h2>welcome ,<span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>

      ): (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
 