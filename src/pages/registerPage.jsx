// import axios from 'axios';
import { fetchCreateUser } from '../redux/operation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    dispatch(fetchCreateUser(formData));
  };
  //   try {
  //     const response = await axios.post(`${baseUrl}/users/signup`, formData);
  //     console.log('Registration successful', response.data.id);
  //     // Redirect or show success message
  //   } catch (error) {
  //     console.error('Registration failed', error.response.data);
  //     // Handle registration error
  //   }
  // };
  console.log(formData.name);
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={formData.name} onChange={handleChange} />
      <input type='email' name='email' value={formData.email} onChange={handleChange} />
      <input type='password' name='password' value={formData.password} onChange={handleChange} />
      <button type='submit'>Register</button>
    </form>
  );
};
export default Register;
