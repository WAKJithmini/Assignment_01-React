import React, {useState} from 'react';
import LoginForm from './component/LoginForm';
function App() {
  const adminUser ={ // the place where we chack the login details
   password:"admin@123"
  }

  const [user, setUser] = useState({name:""});
  const [error, setError] = useState("");

  const Login =details =>{
    console.log(details);

    if(details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name
      });
    }else{
      console.log("details don't match");
      setError("details don't match");
    }
  }

  const Logout =() => {
    setUser({name:""});
    setError("");
  }

  return (
    <div className="App">
      {(user.name !=="") ? (
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
 