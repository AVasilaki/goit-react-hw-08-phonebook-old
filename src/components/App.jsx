// import { AddContact } from './AddContact/AddContact';
import Login from '../pages/loginPage';
import Register from '../pages/registerPage.jsx';
// import Contacts from './Contacts/Contacts';
import ContactsPage from '../pages/contactsPage';
// import { Filter } from './Filter/Filter';
import { refreshUser } from '../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { selectError, selectIsLoading } from '../redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { NavMenu } from './navLink/NavLink';
import { getUser } from '../redux/selectors.js';
import PrivatRoots from './PrivateRout.jsx';
import Home from '../pages/homePage.jsx';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(getUser);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <NavMenu></NavMenu>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route element={<PrivatRoots></PrivatRoots>}>
          <Route path='/contacts' element={<ContactsPage />}></Route>
        </Route>
      </Routes>
      {/* <AddContact></AddContact>
      <Filter></Filter>
      {isLoading && !error && <b>loading in progress...</b>}
      <Contacts></Contacts> */}
    </>
  );
};
