import { AddContact } from '../components/AddContact/AddContact';
import { Filter } from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operation';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <AddContact></AddContact>
      <Filter></Filter>
      {isLoading && !error && <b>loading in progress...</b>}
      <Contacts></Contacts>;
    </>
  );
};
export default ContactsPage;
