import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <h1>MW</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/">Counseling</Link>
        <Link to="/">About Therapy</Link>
        <Link to="/">Meet Maggie</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
