import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
 

  console.log(props.user)
  return (
    <nav>
      <Link style={{textDecoration: "none", color: "black"}}
 to={"/"}>IronStore</Link>
      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button style={{color: "white"}}   className="nav-logoutbtn" onClick={props.handleLogOut}>
              Logout
            </button>
            <button className="nav-logoutbtn" >
              <Link style={{textDecoration: "none", color: "white"}} to="/profile">My Profile</Link>
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
