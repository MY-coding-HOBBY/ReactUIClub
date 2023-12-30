import React,{useState} from "react";
import './Register.css'

const Register = (props) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const reqObj = {
        "fname" : fname,
        "lname" : lname,
        "email" : email,
        "password" : password,
      };
  
      fetch("http://localhost:5001/register/create", {
        method : "POST",
        headers : {"content-type" : "application/json"},
        body: JSON.stringify(reqObj)
      })
      .then((response) => response.json()) //2
      .then((user) => {
        console.log('code: ' + user.code); //3
        console.log('message: ' + user.message); //3
        console.log('data: ' + user.data); //3
        console.log('success: ' + user.success); //3
      })
      .catch((err)=>{
        console.log(err.message);
      });
    }
  
    return (
      <div className="App">
      <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        
          <label>First Name</label>
          <input name="fname" id="fname" type="text" value={fname} onChange={(e) => setFname(e.target.value)}></input>
  
          <label>Last Name</label>
          <input name="lname" id="lname" type="text" value={lname} onChange={(e) => setLname(e.target.value)}></input>

          <label>Email</label>
          <input name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <label>Password</label>
          <input name="password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

          <button type='submit'>Submit</button>
        </form>
      </div>
      </div>
    );
}

export default Register;