import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return(
    <nav className="navbar">
        <div className="navbarbrand">
            <Link to ='/'>
                <img src="/SkillBridge.png" alt="" className="logo" />
            </Link>
        </div>
        <div className="navbarlinks">
            <Link to='/' className="navlinks">Home</Link>
            <Link to='/Invitations' className="navlinks">Invitations</Link>
            <Link to='/Profile' className="navlinks">Profile</Link>
            <Link to='/Account' className="navlinks">Login</Link>

        </div>
    </nav>
    )
}
export default Navbar