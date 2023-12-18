// import { AddContact } from './AddContact/AddContact';
import Login from '../pages/loginPage';
import Register from '../pages/registerPage.jsx';
// import Contacts from './Contacts/Contacts';
import ContactsPage from '../pages/contactsPage';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from '../redux/operation';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectError, selectIsLoading } from '../redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { NavMenu } from './navLink/NavLink';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      {' '}
      <NavMenu></NavMenu>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/contacts' element={<ContactsPage />}></Route>
      </Routes>
      {/* <AddContact></AddContact>
      <Filter></Filter>
      {isLoading && !error && <b>loading in progress...</b>}
      <Contacts></Contacts> */}
    </>
  );
};
