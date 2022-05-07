import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FaqHero from "../components/FaqHero"
import Footer from "../components/Footer"
import NavbarFAQ from "../components/NavbarFAQ"

const FAQ = () => (
  <Layout>
    <Seo title="FAQ" />
    <NavbarFAQ />
    <FaqHero />

    <div className="flex h-max w-screen pt-20 pb-4 relative">
      <StaticImage
        className="absolute top-[60%]"
        src="../images/backgroundFlowerLeft.png"
        alt="Flower Background Image"
        loading="eager"
      />

      <StaticImage
        className="absolute top-[10%] right-0"
        src="../images/backgroundFlowerRight.png"
        alt="Flower Background Image"
        loading="eager"
      />

      <div className="flex flex-col px-4 w-full items-center">
        <div className="w-[90%] lg:w-[55%] bg-gray-100 rounded-md mb-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="p-8 text-cyan-900 text-xl font-medium">
              Do you accept insurance?
            </h2>
            <div className="p-8">
              <p className="text-2xl font-medium text-cyan-900 hidden">+</p>
            </div>
          </div>
          <p className="px-8 pb-8 text-[#475569] font-medium">
            I do not given my current licensure, but if you have BlueCross
            BlueShield I accept what would be considered your copay of $30.
          </p>
        </div>

        <div className="w-[90%] lg:w-[55%] bg-gray-100 rounded-md mb-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="p-8 text-cyan-900 text-xl font-medium">
              Is therapy right for me?
            </h2>
            <div className="p-8">
              <p className="text-2xl font-medium hidden">+</p>
            </div>
          </div>
          <p className="px-8 pb-8 text-[#475569] font-medium">
            Yes, therapy is for everyone. All of us could be better in the way
            we love ourselves and the world around us. We learn how to better
            love ourself and others by unlearning thoughts and behaviors that we
            adopted as children to adapt and survive our environment.
          </p>
        </div>

        <div className="w-[90%] lg:w-[55%] bg-gray-100 rounded-md mb-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="p-8 text-cyan-900 text-xl font-medium">
              What is therapy like?
            </h2>
            <div className="p-8">
              <p className="text-2xl font-medium hidden">+</p>
            </div>
          </div>
          <p className="px-8 pb-8 text-[#475569] font-medium">
            Therapy is a unique experience for everyone because it is
            relational. Therapy is a place where you can come as you are and be
            seen and heard.
          </p>
        </div>

        <div className="w-[90%] lg:w-[55%] bg-gray-100 rounded-md mb-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="p-8 text-cyan-900 text-xl font-medium">
              What techniques or styles is your practice?
            </h2>
            <div className="p-8">
              <p className="text-2xl font-medium hidden">+</p>
            </div>
          </div>
          <p className="px-8 pb-8 text-[#475569] font-medium">
            I have a very empathetic style. I borrow techniques and language for
            Dialectical Behavior Therapy, Cognitive Behavior Therapy, and Person
            Centered Therapy. In my practice I help build awareness and
            mindfulness to your feelings and the way you have learned to react
            to them.
          </p>
        </div>

        <div className="w-[90%] lg:w-[55%] bg-gray-100 rounded-md mb-8">
          <div className="flex flex-row justify-between items-center">
            <h2 className="p-8 text-cyan-900 text-xl font-medium">
              How will therapy help you?
            </h2>
            <div className="p-8">
              <p className="text-2xl font-medium hidden">+</p>
            </div>
          </div>
          <p className="px-8 pb-8 text-[#475569] font-medium">
            Therapy will help you have more awareness of self and help you
            navigate life's triggers. Therapy teaches us to be mindful and to be
            present to our lives so we become more responsive rather than
            reactive.
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col py-8 w-full">
      <h2 className="flex pb-2 justify-center text-2xl text-[#475569] font-medium tracking-wider">
        Still have a question?
      </h2>
      <p className="text-center flex flex-col lg:flex-row pb-16 justify-center text-xl text-[#475569] font-normal tracking-wide">
        <span>
          If you can not find answer to your questions in our FAQ, please
        </span>
        <div>&nbsp;</div>
        <Link className="underline" to="/">
          Contact us.
        </Link>
      </p>
    </div>

    <Footer />
  </Layout>
)

export default FAQ
