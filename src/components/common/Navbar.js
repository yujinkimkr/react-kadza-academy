// import instagram from "../../images/instagram.png";
// import facebook from "../../images/facebook.png";
// import kakaotalk from "../../images/kakaotalk.png";
import logo_r from '../../images/logo_kadza.png';
import { Link } from "react-router-dom";
import classes from './Navbar.module.scss';

import Home from '../routes/Home';

const Navbar = () => {
  return <div className={classes.nav__bar}>
    <div className={classes.nav__logo}>
      {/* Kadza Jężyk Koreański */}

      <img className={classes.logo} src={logo_r} alt="Logo" />
      {/* <ul className={classes.nav__icons}>
        <li><img src={instagram} alt="" /></li>
        <li><img src={facebook} alt="" /></li>
        <li><img src={kakaotalk} alt="" /></li>
      </ul> */}
    </div>
    <ul className={classes.nav__menu}>

      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/courses"><li>Courses</li></Link>
      <Link to="/register"><li>Register</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      {/* <Link to="/faq"><li>FAQ</li></Link> */}
    </ul>
    {/* <ul className="nav__menu">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/courses">
        <li>Courses</li>
      </Link>
      <Link to="fees">
        <li>Fees</li>
      </Link>
      <Link to="register">
        <li>Register</li>
      </Link>
      <Link to="faq">
        <li>FAQ</li>
      </Link>
    </ul> */}
  </div>
}

export default Navbar;
