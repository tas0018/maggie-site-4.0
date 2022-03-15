import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <nav
      className="fixed w-screen flex justify-between px-12 h-16 items-center bg-white text-black z-50
    "
    >
      <Link to="/">
        <StaticImage
          src="../images/WatersLogo.png"
          width={50}
          alt="Waters Counseling Logo"
          loading="eager"
        />
      </Link>
      <div className=" flex text-lg space-x-8">
        <div>
          <Link to="/">Welcome</Link>
        </div>

        <div>
          <Link to="/faq/">FAQ</Link>
          <div class="flex m-auto w-2 h-2 rounded-full bg-cyan-900"></div>
        </div>

        <div>
          <Link to="/services/">Therapy Sevices</Link>
        </div>

        <div>
          <Link to="/meetMaggie/">Meet Maggie</Link>
        </div>

        <div>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
