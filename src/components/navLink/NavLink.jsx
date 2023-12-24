import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <nav className='mb-2 flex items-start gap-10 font-serif font-medium text-slate-500 hover:font-sans '>
      <Link to='/'> Home</Link>
      <Link to='/login'> login</Link>
      <Link to='/register'>register</Link>
      <Link to='/contacts'>Contacts</Link>
    </nav>
  );
};
