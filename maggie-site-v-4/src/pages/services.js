import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NavbarServices from "../components/NavbarServices"
import ServicesHero from "../components/ServicesHero"

function services() {
  return (
    <div>
      <Layout />
      <NavbarServices />
      <Seo title="Waters Therapy Services" />
      <ServicesHero />
      <div className="flex flex-row w-full h-max py-8 px-12">
        <div className="flex flex-col w-4/12 pl-24">
          <div className="bg-gray-100">
            <h2>Services</h2>
          </div>

          <div>
            <h3>Sexual Abuse</h3>
          </div>

          <div>
            <h3>Anxiety</h3>
          </div>

          <div>
            <h3>OCD</h3>
          </div>

          <div>
            <h3>Depression</h3>
          </div>

          <div>
            <h3>Recovery</h3>
          </div>

          <div>
            <h3>Grief</h3>
          </div>
        </div>
        <div className="flex flex-col w-8/12"></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default services
