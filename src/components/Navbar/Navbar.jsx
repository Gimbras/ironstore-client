import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";



const Navbar = (props) => {




  return (
    <nav>
      <h1>IronStore</h1>
      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogOut}>
              Logout
            </button>
            <button className="nav-logoutbtn" to="/Profile">
              My Profile
            </button>
          </>
        ) : (
          <>
            <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
            <Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
                                               
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
