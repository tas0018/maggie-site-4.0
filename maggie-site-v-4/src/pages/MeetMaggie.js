import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import MeetHero from "../components/MeetHero"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import NavbarMaggie from "../components/NavbarMaggie"
import { Link } from "gatsby"

function MeetMaggie() {
  return (
    <div className="">
      <Layout />
      <NavbarMaggie />
      <MeetHero />
      {/*Split Image and Quote Container */}
      <div className="flex flex-col lg:flex-row h-full justify-center py-12 px-8 lg:px-12">
        <div className="w-full lg:w-1/2 min-h-auto lg:min-h-[80vh] relative pb-12 lg:pb-0">
          <StaticImage
            src="../images/Group-pic-one.png"
            alt="Background flower image"
            objectFit="cover"
            class="rounded-md left-[5%] absolute max-w-full lg:max-w-[80%] hidden lg:block"
            layout="constrained"
          ></StaticImage>

          <StaticImage
            src="../images/meet-pic-one.png"
            alt="Background flower image"
            objectFit="cover"
            class="rounded-md max-w-full lg:max-w-[80%] block lg:hidden h-72"
            layout="constrained"
          ></StaticImage>

          <StaticImage
            src="../images/meet-pic-two.png"
            alt="Background flower image"
            objectFit="cover"
            class="rounded-md max-w-full top-4 lg:max-w-[80%] block lg:hidden h-72"
            layout="constrained"
          ></StaticImage>
        </div>

        <div className="w-full lg:w-1/2 flex items-center">
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
            <div className="flex flex-row pt-12 lg:pt-0">
              <button className="h-full">
                <Link
                  className="text-white py-4 px-8 bg-[#214B59] mr-4 rounded-md   w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200 hidden"
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

export default MeetMaggie
