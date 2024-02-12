import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [alertVisible, setAlertVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming your REST API endpoint is 'https://example.com/api/login'
    const apiUrl = 'https://dummyjson.com/auth/login';

    // Perform the POST request using fetch or a library like Axios
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Add other headers as needed
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response as needed
        console.log('API Response:', data);
        if(data.id)
        {
          navigate('/ContactList');
        }
        else
        {
          setMessage(data.message);
          setAlertVisible(true);
        }
      })
      .catch(error => {
        // Handle errors
        console.error('API Error:', error);
      });
  };

  return (
    

    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
    
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="/tailor.png"
          className="img-fluid" alt="Sample" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
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
        <form onSubmit={handleSubmit}>
          
          <div className="form-outline mb-4">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          </div>

          
          <div className="form-outline mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          </div>

          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg login_btn">Login</button>
            
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2024. All rights reserved.
    </div>
    

  </div>
</section>
  );
};

export default Login;
