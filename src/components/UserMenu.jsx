import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/selectors';
import { logOut } from '../redux/authSlice';
export const UserMenu = () => {
  const {
    user: { email },
  } = useSelector(getUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  console.log(email);
  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
