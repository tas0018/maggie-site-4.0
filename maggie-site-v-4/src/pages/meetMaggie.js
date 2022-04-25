import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import MeetHero from "../components/MeetHero"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import NavbarMaggie from "../components/NavbarMaggie"
import { Link } from "gatsby"

function meetMaggie() {
  return (
    <div className="">
      <Layout />
      <NavbarMaggie />
      <MeetHero />
      {/*Split Image and Quote Container */}
      <div className="flex h-full justify-center p-12">
        <div className="w-1/2 min-h-[80vh] relative ">
          <StaticImage
            src="../images/Group-pic-one.png"
            alt="Background flower image"
            objectFit="cover"
            class="rounded-md left-[5%] absolute max-w-[80%]"
            layout="constrained"
          ></StaticImage>
        </div>

        <div className="w-1/2 flex items-center">
          <div className="flex flex-col justify-between h-[80%]">
            <h2 className="text-[#556575] text-[1.8rem]">
              Who is Maggie Williams
            </h2>
            <p className="text-[#556575] text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to use Content here, content
              here', making it look like readable English.
            </p>
            <p className="text-[#556575] text-lg">
              Many desktop publishing packages and web page editors now use
              Lorem as their default model text, and a search for 'lorem ipsum'
              will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and like).
            </p>
            <div className="flex flex-row">
              <button className="h-full">
                <Link
                  className="text-white py-4 px-8 bg-[#214B59] mr-4 rounded-md   w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Read More
                </Link>
              </button>
              <button>
                <Link
                  className="text-[#214B59] border-[0.5px] border-[#214B59] py-4 px-8 bg-white mr-4 rounded-md w-fit font-medium text-sm
                   hover:bg-[#214B59] hover:text-white hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default meetMaggie
