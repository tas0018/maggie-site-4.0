import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import HeroGrid from "../components/HeroGrid"
import PoemSection from "../components/PoemSection"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <HeroGrid />
    <PoemSection />
    <Footer />
  </Layout>
)

export default IndexPage
