import React, { useState } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const handleItemClick = () => {
      // Close the menu
      setMenuOpen(false);
    };
  
    const handleToggleClick = () => {
      // Toggle the menu state
      setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button   className={`navbar-toggler ${menuOpen ? "active" : ""}`}  type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"   onClick={handleToggleClick} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div  className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
        id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item"><Link className="nav-link" to="/general" onClick={handleItemClick}>General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business" onClick={handleItemClick}>Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick={handleItemClick}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health" onClick={handleItemClick}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science" onClick={handleItemClick}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports" onClick={handleItemClick}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology" onClick={handleItemClick}>Technology</Link></li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar