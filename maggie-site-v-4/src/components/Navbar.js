import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav
      className="fixed w-screen flex justify-between px-12 h-16 items-center bg-transparent text-white z-50
    "
    >
      <h1>MW</h1>
      <div className="text-lg space-x-8">
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
