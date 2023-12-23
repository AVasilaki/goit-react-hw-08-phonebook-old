import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <nav>
      <Link to='/'> Home</Link>
      <Link to='/login'> login</Link>
      <Link to='/register'>register</Link>
      <Link to='/contacts'>Contacts</Link>
    </nav>
  );
};
