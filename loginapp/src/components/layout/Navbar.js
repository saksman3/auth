import React, {useState, useEffect, Fragment} from 'react';

import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);
  
    useEffect(() => {
      if (Cookies.get('token')) {
         
        setIsAuth(true);
      }
    }, []);
  
    return (
      <nav>
        <h1>Auth</h1>
        <ul>
          {isAuth === true ? (
            <Fragment>
              {' '}
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              {' '}
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/signup'>Signup</Link>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;