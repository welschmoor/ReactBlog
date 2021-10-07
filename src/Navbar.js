
import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
<header className="header">
    <div className="mainnav-div">
        <ul className="mainnav-ul">
            <li className="mainnav-li"><Link className="mainnav-a" to="/">Home</Link></li>
            <li className="mainnav-li"><Link className="mainnav-a" to="/create">+New Post</Link></li>
            <li className="mainnav-li"><Link className="mainnav-a" to="/blogs">Blogs</Link></li>
            <li className="mainnav-li"><Link className="mainnav-a" to="/about">About</Link></li>

        </ul>
    </div>
</header>
    )
}

export default Navbar