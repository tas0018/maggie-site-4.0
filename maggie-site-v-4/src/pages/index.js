import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
