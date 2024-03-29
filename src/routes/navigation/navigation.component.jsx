import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './navigation.style.scss'

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;