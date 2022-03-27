import { Link } from "@reach/router";
import logoImg from "../../static/images/logo.png";

const Header = () => (
   <div className="py-4 px-6">
      <Link to="/">
         <img src={logoImg} alt="digivote logo" width="192px"/>
      </Link>
   </div>
);

export default Header;
