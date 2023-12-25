import Login from '../pages/loginPage';
import Register from '../pages/registerPage.jsx';
import ContactsPage from '../pages/contactsPage';
import { refreshUser } from '../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavMenu } from './navLink/NavLink';
import { getUser } from '../redux/selectors.js';
import PrivatRoots from './PrivateRout.jsx';
import Home from '../pages/homePage.jsx';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(getUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <NavMenu></NavMenu>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={isLoggedIn ? <Navigate to='/contacts' /> : <Login />}></Route>
        <Route path='/register' element={isLoggedIn ? <Navigate to='/' /> : <Register />}></Route>
        <Route element={<PrivatRoots></PrivatRoots>}>
          <Route path='/contacts' element={<ContactsPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
