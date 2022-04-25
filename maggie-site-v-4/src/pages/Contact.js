import React from "react"
import Layout from "../components/layout"
import NavbarContact from "../components/NavbarContact"
import ContactHero from "../components/ContactHero"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Footer from "../components/Footer"

function Contact() {
  return (
    <div>
      <Layout>
        <NavbarContact />
        <ContactHero />
        <div className="h-full py-8">
          <div>
            <h2 className="text-[#214B59] text-center text-[1.5rem] font-medium">
              Get in touch with us. We'd love to hear from you
            </h2>
          </div>
          <div className="w-full">
            <form
              method="post"
              action="https://getform.io/f/07917147-c669-46ce-9895-ddc565a56017"
              className="flex flex-col items-center "
            >
              <div className="flex flex-row w-1/2 justify-between mt-4">
                <label className="w-[49.5%]">
                  <h3>First Name*</h3>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="border border-[#E7E7E7] bg-[#F2F2F2] rounded-md py-2 w-full pl-2"
                  />
                </label>

                <label className="w-[49.5%]">
                  <h3>Last Name*</h3>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="border border-[#E7E7E7] bg-[#F2F2F2] rounded-md py-2 w-full pl-2"
                  />
                </label>
              </div>

              <div className="flex flex-row w-1/2 justify-between mt-4">
                <label className="w-[49.5%]">
                  <h3>Your Email*</h3>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-[#E7E7E7] bg-[#F2F2F2] rounded-md py-2 w-full pl-2"
                  />
                </label>

                <label className="w-[49.5%]">
                  <h3>Select Service*</h3>
                  <select
                    id="services"
                    className="border border-[#E7E7E7] bg-[#F2F2F2] rounded-md py-2.5 w-full pl-2"
                  >
                    <option label="service 1">Service 1</option>
                    <option label="service 2">Service 2</option>
                    <option label="service 3">Service 3</option>
                    <option label="service 4">Service 4</option>
                  </select>
                </label>
              </div>

              <div className="flex flex-col w-1/2 justify-start items-start mt-4">
                <h3>Your Message</h3>
                <textarea
                  name="your message"
                  id="your message"
                  className="border border-[#E7E7E7] bg-[#F2F2F2] rounded-md py-2 w-full pl-2 h-56 "
                ></textarea>
              </div>

              <div className="mt-12">
                <button type="submit">
                  <Link
                    className="text-white py-4 px-6 bg-[#214B59] mr-4 rounded-md   w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Submit Now
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </Layout>
    </div>
  )
}

export default Contact
