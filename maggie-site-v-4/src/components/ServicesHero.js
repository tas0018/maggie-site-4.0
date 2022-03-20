import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import ServicesHeroImage from "../images/candleHero.png"
import { Link } from "gatsby"
function ServicesHero() {
  return (
    <div
      className="flex flex-col items-center justify-center h-[70vh] bg-cover bg-no-repeat bg-center px-12"
      style={{ backgroundImage: `url(${ServicesHeroImage})` }}
    >
      <h1 className="text-white text-4xl font-medium">Our Services</h1>
      <div className="flex flex-row mt-2">
        <Link className="text-white text-2xl font-medium px-2" to="/">
          Home
        </Link>

        <FontAwesomeIcon className="text-white" icon={faAngleRight} size="2x" />

        <Link className="text-white text-2xl font-medium px-2" to="/services/">
          Services
        </Link>
      </div>
    </div>
  )
}

export default ServicesHero