// const Login = () => {
//   return (
//     <div>
//       <input type='text' placeholder='name'></input>
//       <input type='text' placeholder='password'></input>
//     </div>
//   );
// };
import { useState } from 'react';
// import axios from 'axios';
// import localStorage from 'redux-persist/es/storage';
import { fetchLoginUser } from '../redux/operation';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const baseUrl = 'https://connections-api.herokuapp.com';
  const dispatch = useDispatch();
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(fetchLoginUser(formData));
  };
  //   try {
  //     const response = await axios.post(`${baseUrl}/users/login`, formData);
  //     console.log('Login successful', response.data);
  //     localStorage.setItem('token', response.data.token);
  //     // Save token in local storage or state for authentication
  //     // Redirect or show success message
  //   } catch (error) {
  //     console.error('Login failed', error.response.data);
  //     // Handle login error
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' name='email' value={formData.email} onChange={handleChange} />
      <input type='password' name='password' value={formData.password} onChange={handleChange} />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
