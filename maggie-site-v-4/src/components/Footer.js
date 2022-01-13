import React from "react"
import { Link } from "gatsby"

function Footer() {
  return (
    <div className="h-max flex bg-sky-900 text-white justify-around p-8">
      <div className="flex flex-col justify-between">
        <div>
          <h3>Therapist in Auburn</h3>
          <h3>someemail@email.com</h3>
          <p>4635 Coventry Court</p>
          <p>ATLASBURG, PA, 15004</p>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Maggie Williams Therapy LLC</p>
        </div>
      </div>
      <div>
        <h2>Logo</h2>
      </div>
      <div className="flex flex-col">
        <Link to="/">Home</Link>
        <Link to="/">About Maggie</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Individual</Link>
        <Link to="/">Group</Link>
        <Link to="/">Book a Session</Link>
      </div>
    </div>
  )
}

export default Footer
