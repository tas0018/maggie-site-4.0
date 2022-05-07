import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className="h-max flex flex-col lg:flex-row bg-[#F5F6F0] text-[#515151] font-Alata justify-around p-8">
      <div className="flex flex-col justify-between">
        <div>
          <StaticImage
            className="py-2"
            src="../images/WatersLogowText.png"
            width={80}
          />

          <h3>Therapist in Auburn</h3>
          <p>311 N College St.</p>
          <p>Auburn, AL 36830</p>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Maggie Williams Therapy LLC</p>
        </div>
      </div>

      <div className="mt-8 lg:mt-0">
        <h4 className="text-xl">Social</h4>
        <div className=" flex flex-col items-start lg:items-center pt-2 h-full">
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col mt-8 lg:mt-0">
        <h4 className="text-xl">Site Links</h4>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Individual</Link>
        <Link to="/">Book a Session</Link>
      </div>

      <div className="hidden flex-col">
        <h4 className="text-xl">Resources</h4>
        <Link to="/">Blog</Link>
        <Link to="/">Spotify</Link>
      </div>
    </div>
  )
}

export default Footer
