import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';


const Login = () => {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
	const [password, setPassword] = useState("");

  const [alertVisible, setAlertVisible] = useState(false);
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('fghhhh');
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          
            // Signed in
            // const user = userCredential.user;
            navigate("/ContactList")
            // console.log(user);
        })
        .catch((error) => {
          
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    
  };

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      {alertVisible && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {message}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertVisible(false)}
              ></button>
            </div>
          )}
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>

            <div className="text-center">
              <img src="/tailor2.jpg" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile" />
            </div>

            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" name="username"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            required aria-describedby="emailHelp"
                placeholder="User Name" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required placeholder="password" />
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100 btn-primary">Login</button></div>
            
          </form>
        </div>

      </div>
    </div>
  </div>

    
  );
};

export default Login;
