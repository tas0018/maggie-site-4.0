import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import MeetHero from "../components/MeetHero"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

function meetMaggie() {
  return (
    <div>
      <Layout />
      <Seo title="Meet Maggie Williams" />
      <MeetHero />
      {/*Split Image and Quote Container */}
      <div className="flex h-full justify-center p-12">
        {/*Maggie Image and Quote Div */}
        <div className="flex relative justify-center items-center">
          <StaticImage
            src="../images/maggieTherapistPicture.jpg"
            width={400}
            alt="Picture of Maggie Williams"
            objectFit="cover"
            layout="constrained"
          />
          <div className=" flex h-max w-min py-12 px-8 bg-cyan-500/50 -translate-x-20">
            <h2 className="text-4xl w-full text-right ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, commodi.
            </h2>
          </div>
        </div>
      </div>

      {/*Maggie Info Div*/}
      <div>
        <h2></h2>
      </div>
      <Footer />
    </div>
  )
}

export default meetMaggie
