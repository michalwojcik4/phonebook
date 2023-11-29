import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../redux/slices/auth/operations';
import { selectUser } from 'redux/slices/auth/selectors';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>{user.email}</div>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default User;
