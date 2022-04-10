import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import NavbarServices from "../components/NavbarServices"
import ServicesHero from "../components/ServicesHero"
import ServicesImgHeader from "../images/ServicesImgHeader.png"

function services() {
  return (
    <div>
      <Layout />
      <NavbarServices />
      <Seo title="Waters Therapy Services" />
      <ServicesHero />
      <div className="flex flex-row w-full h-max py-8 px-12">
        <div className="flex flex-col w-4/12 pl-28 pr-4">
          <div className=" flex flex-row items-center bg-[#214B59] text-[1.8rem] rounded-md border border-[#E7E7E7] h-12 mb-2">
            <h2 className="text-white ml-8">Services</h2>
          </div>

          <div
            className="flex flex-row items-center bg-[#E5E5E5] rounded-md border border-[#E7E7E7] h-12 mb-2
           hover:bg-[#F5F6F0] hover:duration-200 ease-in-out duration-200
          "
          >
            <h3 className="text-[#556575] ml-8">Sexual Abuse</h3>
          </div>

          <div
            className="flex flex-row items-center bg-[#E5E5E5] rounded-md border border-[#E7E7E7] h-12 mb-2
           hover:bg-[#F5F6F0] hover:duration-200 ease-in-out duration-200
          "
          >
            <h3 className="text-[#556575] ml-8">Anxiety</h3>
          </div>

          <div
            className="flex flex-row items-center bg-[#E5E5E5] rounded-md border border-[#E7E7E7] h-12 mb-2
           hover:bg-[#F5F6F0] hover:duration-200 ease-in-out duration-200
          "
          >
            <h3 className="text-[#556575] ml-8">OCD</h3>
          </div>

          <div
            className="flex flex-row items-center bg-[#E5E5E5] rounded-md border border-[#E7E7E7] h-12 mb-2
           hover:bg-[#F5F6F0] hover:duration-200 ease-in-out duration-200
          "
          >
            <h3 className="text-[#556575] ml-8">Depression</h3>
          </div>

          <div
            className="flex flex-row items-center bg-[#E5E5E5] rounded-md border border-[#E7E7E7] h-12 mb-2
           hover:bg-[#F5F6F0] hover:duration-200 ease-in-out duration-200
          "
          >
            <h3 className="text-[#556575] ml-8">Recovery</h3>
          </div>

          <div
            className="flex flex-row items-center bg-[#E5E5E5] rounded-md border border-[#E7E7E7] h-12 mb-2
           hover:bg-[#F5F6F0] hover:duration-200 ease-in-out duration-200
          "
          >
            <h3 className="text-[#556575] ml-8">Grief</h3>
          </div>
        </div>
        <div className="flex flex-col w-8/12 pr-28 pl-8">
          <div>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around">
                <h2 className="text-white text-[1.8rem]">Services</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2] "
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default services
