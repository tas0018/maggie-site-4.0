import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import FaqHeroImage from "../images/faqHero.png"
import { Link } from "gatsby"

function FaqHero() {
  return (
    <div
      className="flex flex-col items-center justify-center h-[70vh] bg-cover bg-no-repeat bg-center px-12 bg-fixed"
      style={{ backgroundImage: `url(${FaqHeroImage})` }}
    >
      <h1 className="text-white text-4xl font-medium text-center">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-row mt-2">
        <Link className="text-white text-2xl font-medium px-2" to="/">
          Home
        </Link>

        <FontAwesomeIcon
          className="text-white mt-2"
          icon={faAngleRight}
          size="2x"
        />

        <Link className="text-white text-2xl font-medium px-2" to="/">
          FAQ
        </Link>
      </div>
    </div>
  )
}

export default FaqHero
