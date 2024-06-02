import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import {UserContext} from '../../contexts/user.context';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {signOutUser} from '../../utils/firebase/firebase.utils';

import './navigation.style.scss';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
