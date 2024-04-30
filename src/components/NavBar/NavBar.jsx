import "./style.css"
// import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (  
        <nav className="nav">
            <div className="nav-row">
                <a className="normal-link" href="">HOME</a>
                <a className="normal-link" href="">ABOUT</a>
                <a className="normal-link" href="">CONTACTS</a>
            </div>
        </nav>
    );
}
 
export default NavBar;