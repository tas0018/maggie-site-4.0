import React from "react"
import Layout from "../components/layout"
import NavbarContact from "../components/NavbarContact"
import ContactHero from "../components/ContactHero"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Contact() {
  return (
    <div>
      <Layout>
        <NavbarContact />
        <ContactHero />
      </Layout>
    </div>
  )
}

export default Contact
