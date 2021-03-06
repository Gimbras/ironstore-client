import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {UserContext} from '../../context/app.context'

const Navbar = (props) => {
  
  const {items, setItems} = useContext(UserContext)
 

  console.log(props.user)
  return (
    <nav>
      <Link style={{textDecoration: "none", color: "black"}}
 to={"/"}>IronStore</Link>
      <div className="nav__authLinks">
        {props.user ? (
          <>
            {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link> */}
            <div class="cart">
            <Link to="/checkout" className="authLink">
            <ShoppingBasketIcon badge content={items}/> 
          
            </Link>
            
         
            <button className="nav-logoutbtn" >
              <Link style={{textDecoration: "none", color: "black"}} to="/profile">My Profile</Link>
            </button>
            <button style={{color: "black"}}   className="nav-logoutbtn" onClick={props.handleLogOut}>
              Logout
            </button>
            </div>
            
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
