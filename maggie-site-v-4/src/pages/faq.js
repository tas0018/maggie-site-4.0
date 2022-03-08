import * as React from "react"
import { Link } from "gatsby"

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
    <div className="flex h-max w-screen py-20">
      <div className="flex flex-col pl-24 pr-6 w-6/12">
        <div>
          <h2 className="text-cyan-700 text-xl font-medium py-8">
            Do you accept insurance?
          </h2>
          <p className="text-lg text-slate-500 border-b pb-8  border-cyan-700  ">
            I do not given my current licensure, but if you have BlueCross
            BlueShield I accept what would be considered your copay of $30.
          </p>
        </div>

        <div>
          <h2 className="text-cyan-700 text-xl font-medium py-8">
            Is therapy right for me?
          </h2>
          <p className="text-lg text-slate-500 border-b pb-8  border-cyan-700  ">
            Yes, therapy is for everyone. All of us could be better in the way
            we love ourselves and the world around us. We learn how to better
            love ourself and others by unlearning thoughts and behaviors that we
            adopted as children to adapt and survive our environment.
          </p>
        </div>

        <div>
          <h2 className="text-cyan-700 text-xl font-medium py-8">
            What is therapy like?
          </h2>
          <p className="text-lg text-slate-500 border-b pb-8  border-cyan-700  ">
            Therapy is a unique experience for everyone because it is
            relational. Therapy is a place where you can come as you are and be
            seen and heard.
          </p>
        </div>
      </div>

      <div className="flex flex-col pr-24 pl-6 w-6/12">
        <div>
          <h2 className="text-cyan-700 text-xl font-medium py-8">
            What techniques or styles is your practice?
          </h2>
          <p className="text-lg text-slate-500 border-b pb-8  border-cyan-700  ">
            I have a very empathetic style. I borrow techniques and language for
            Dialectical Behavior Therapy, Cognitive Behavior Therapy, and Person
            Centered Therapy. In my practice I help build awareness and
            mindfulness to your feelings and the way you have learned to react
            to them.
          </p>
        </div>

        <div>
          <h2 className="text-cyan-700 text-xl font-medium py-8">
            How will therapy help you?
          </h2>
          <p className="text-lg text-slate-500 border-b pb-8  border-cyan-700  ">
            Therapy will help you have more awareness of self and help you
            navigate life's triggers. Therapy teaches us to be mindful and to be
            present to our lives so we become more responsive rather than
            reactive.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default FAQ
