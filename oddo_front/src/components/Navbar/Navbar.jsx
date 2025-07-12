import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return(
    <nav className="navbar">
        <div className="navbarbrand">
            <Link to ='/'>
                <img src="/SkillBridge.jpg" alt="" className="" />
            </Link>
        </div>
        <div className="navbarlinks">
            <Link to='/' className="navlinks">Home</Link>
            <Link to='/Account' className="navlinks">Account</Link>
        </div>
    </nav>
    )
}
export default Navbar