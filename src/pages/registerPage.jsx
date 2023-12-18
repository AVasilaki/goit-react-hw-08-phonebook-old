// const Register = () => {};
// export default Register;
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const baseUrl = 'https://connections-api.herokuapp.com';
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/users/signup`, formData);
      console.log('Registration successful', response.data.id);
      // Redirect or show success message
    } catch (error) {
      console.error('Registration failed', error.response.data);
      // Handle registration error
    }
  };
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
