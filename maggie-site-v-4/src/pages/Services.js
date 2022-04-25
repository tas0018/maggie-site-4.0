import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import NavbarServices from "../components/NavbarServices"
import ServicesHero from "../components/ServicesHero"
import ServicesImgHeader from "../images/ServicesImgHeader.png"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"

function Services() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <div className="relative">
      <Layout />
      <NavbarServices />
      <Seo title="Waters Therapy Services" />
      <ServicesHero />
      <StaticImage
        src="../images/meet-pic-one.png"
        width={400}
        alt="Picture of Maggie Williams One"
        objectFit="cover"
        class="absolute left-0 top-1/2"
      ></StaticImage>
      <div className="flex flex-row w-full h-full py-8 px-12">
        <div className="flex flex-col w-4/12 pl-28 pr-4">
          <button
            className="services-tab"
            onClick={() => toggleTab(1)}
            role={"tab"}
          >
            <h2 className="text-white ml-8">Services</h2>
          </button>

          <button className="tabs" onClick={() => toggleTab(2)} role={"tab"}>
            <h3 className="text-[#556575] ml-8">Sexual Abuse</h3>
          </button>

          <button className="tabs" onClick={() => toggleTab(3)} role={"tab"}>
            <h3 className="text-[#556575] ml-8">Anxiety</h3>
          </button>

          <button className="tabs" onClick={() => toggleTab(4)} role={"tab"}>
            <h3 className="text-[#556575] ml-8">OCD</h3>
          </button>

          <button className="tabs" onClick={() => toggleTab(5)} role={"tab"}>
            <h3 className="text-[#556575] ml-8">Depression</h3>
          </button>

          <button className="tabs" onClick={() => toggleTab(6)} role={"tab"}>
            <h3 className="text-[#556575] ml-8">Recovery</h3>
          </button>

          <button className="tabs" onClick={() => toggleTab(7)} role={"tab"}>
            <h3 className="text-[#556575] ml-8">Grief</h3>
          </button>
        </div>

        <div className="flex flex-col w-8/12 pr-28 pl-8 h-max">
          <div className={toggleState === 1 ? "active-content" : "content"}>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around ">
                <h2 className="text-white text-[1.8rem]">Services</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full h-fit my-2">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="flex flex-row w-full min-h-32 pt-8">
              <div className="w-4/5 min-h-28 flex flex-col justify-around pr-2">
                <h3 className="text-[1.4rem] font-medium text-[#214B59]">
                  Why do we use it?
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 making it over 2000 years old. Richard McClintock, a
                  Latin profesHampden.
                </p>
              </div>

              <StaticImage
                src="../images/servicesWoman.png"
                width={400}
                alt="Picture of Maggie Williams"
                objectFit="cover"
                layout="constrained"
                className="drop-shadow-mds"
              ></StaticImage>
            </div>

            <div className="w-full h-fit mt-8">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="w-full h-fit mt-4">
              <div className="flex flex-col">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <ul className="mt-4 pl-8 list-disc">
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                </ul>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <div className="flex flex-row justify-center mt-8">
                  <Link
                    className="px-8 py-2 text-white text-xl rounded-md  bg-[#214B59] hover:bg-[#DCEBE4] hover:text-[#151619]
                     hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "active-content" : "content"}>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around ">
                <h2 className="text-white text-[1.8rem]">Sexual Abuse</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full h-fit my-2">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="flex flex-row w-full min-h-32 pt-8">
              <div className="w-4/5 min-h-28 flex flex-col justify-around pr-2">
                <h3 className="text-[1.4rem] font-medium text-[#214B59]">
                  Why do we use it?
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 making it over 2000 years old. Richard McClintock, a
                  Latin profesHampden.
                </p>
              </div>

              <StaticImage
                src="../images/servicesWoman.png"
                width={400}
                alt="Picture of Maggie Williams"
                objectFit="cover"
                layout="constrained"
                className="drop-shadow-mds"
              ></StaticImage>
            </div>

            <div className="w-full h-fit mt-8">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="w-full h-fit mt-4">
              <div className="flex flex-col">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <ul className="mt-4 pl-8 list-disc">
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                </ul>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <div className="flex flex-row justify-center mt-8">
                  <Link
                    className="px-8 py-2 text-white text-xl rounded-md  bg-[#214B59] hover:bg-[#DCEBE4] hover:text-[#151619]
                     hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 3 ? "active-content" : "content"}>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around ">
                <h2 className="text-white text-[1.8rem]">Anxiety</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full h-fit my-2">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="flex flex-row w-full min-h-32 pt-8">
              <div className="w-4/5 min-h-28 flex flex-col justify-around pr-2">
                <h3 className="text-[1.4rem] font-medium text-[#214B59]">
                  Why do we use it?
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 making it over 2000 years old. Richard McClintock, a
                  Latin profesHampden.
                </p>
              </div>

              <StaticImage
                src="../images/servicesWoman.png"
                width={400}
                alt="Picture of Maggie Williams"
                objectFit="cover"
                layout="constrained"
                className="drop-shadow-mds"
              ></StaticImage>
            </div>

            <div className="w-full h-fit mt-8">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="w-full h-fit mt-4">
              <div className="flex flex-col">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <ul className="mt-4 pl-8 list-disc">
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                </ul>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <div className="flex flex-row justify-center mt-8">
                  <Link
                    className="px-8 py-2 text-white text-xl rounded-md  bg-[#214B59] hover:bg-[#DCEBE4] hover:text-[#151619]
                     hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 4 ? "active-content" : "content"}>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around ">
                <h2 className="text-white text-[1.8rem]">OCD</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full h-fit my-2">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="flex flex-row w-full min-h-32 pt-8">
              <div className="w-4/5 min-h-28 flex flex-col justify-around pr-2">
                <h3 className="text-[1.4rem] font-medium text-[#214B59]">
                  Why do we use it?
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 making it over 2000 years old. Richard McClintock, a
                  Latin profesHampden.
                </p>
              </div>

              <StaticImage
                src="../images/servicesWoman.png"
                width={400}
                alt="Picture of Maggie Williams"
                objectFit="cover"
                layout="constrained"
                className="drop-shadow-mds"
              ></StaticImage>
            </div>

            <div className="w-full h-fit mt-8">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="w-full h-fit mt-4">
              <div className="flex flex-col">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <ul className="mt-4 pl-8 list-disc">
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                </ul>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <div className="flex flex-row justify-center mt-8">
                  <Link
                    className="px-8 py-2 text-white text-xl rounded-md  bg-[#214B59] hover:bg-[#DCEBE4] hover:text-[#151619]
                     hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 5 ? "active-content" : "content"}>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around ">
                <h2 className="text-white text-[1.8rem]">Depression</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full h-fit my-2">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="flex flex-row w-full min-h-32 pt-8">
              <div className="w-4/5 min-h-28 flex flex-col justify-around pr-2">
                <h3 className="text-[1.4rem] font-medium text-[#214B59]">
                  Why do we use it?
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 making it over 2000 years old. Richard McClintock, a
                  Latin profesHampden.
                </p>
              </div>

              <StaticImage
                src="../images/servicesWoman.png"
                width={400}
                alt="Picture of Maggie Williams"
                objectFit="cover"
                layout="constrained"
                className="drop-shadow-mds"
              ></StaticImage>
            </div>

            <div className="w-full h-fit mt-8">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="w-full h-fit mt-4">
              <div className="flex flex-col">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <ul className="mt-4 pl-8 list-disc">
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                </ul>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <div className="flex flex-row justify-center mt-8">
                  <Link
                    className="px-8 py-2 text-white text-xl rounded-md  bg-[#214B59] hover:bg-[#DCEBE4] hover:text-[#151619]
                     hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 6 ? "active-content" : "content"}>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around ">
                <h2 className="text-white text-[1.8rem]">Recovery</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full h-fit my-2">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="flex flex-row w-full min-h-32 pt-8">
              <div className="w-4/5 min-h-28 flex flex-col justify-around pr-2">
                <h3 className="text-[1.4rem] font-medium text-[#214B59]">
                  Why do we use it?
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 making it over 2000 years old. Richard McClintock, a
                  Latin profesHampden.
                </p>
              </div>

              <StaticImage
                src="../images/servicesWoman.png"
                width={400}
                alt="Picture of Maggie Williams"
                objectFit="cover"
                layout="constrained"
                className="drop-shadow-mds"
              ></StaticImage>
            </div>

            <div className="w-full h-fit mt-8">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="w-full h-fit mt-4">
              <div className="flex flex-col">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <ul className="mt-4 pl-8 list-disc">
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                </ul>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <div className="flex flex-row justify-center mt-8">
                  <Link
                    className="px-8 py-2 text-white text-xl rounded-md  bg-[#214B59] hover:bg-[#DCEBE4] hover:text-[#151619]
                     hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 7 ? "active-content" : "content"}>
            <div
              className="w-full h-64 rounded-md bg-cover"
              style={{ backgroundImage: `url(${ServicesImgHeader})` }}
            >
              <div className="h-full w-3/5 flex flex-col p-8 justify-around ">
                <h2 className="text-white text-[1.8rem]">Grief</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quis illo et quo! Vero eligendi enim nesciunt Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.?
                </p>
                <Link
                  className="text-white py-2 px-8 bg-[#214B59] rounded-sm w-fit font-medium text-sm hover:bg-[#F2F2F2]
                  hover:text-[#556575] hover:duration-200 ease-in-out duration-200"
                  to="/"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="w-full h-fit my-2">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="flex flex-row w-full min-h-32 pt-8">
              <div className="w-4/5 min-h-28 flex flex-col justify-around pr-2">
                <h3 className="text-[1.4rem] font-medium text-[#214B59]">
                  Why do we use it?
                </h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 making it over 2000 years old. Richard McClintock, a
                  Latin profesHampden.
                </p>
              </div>

              <StaticImage
                src="../images/servicesWoman.png"
                width={400}
                alt="Picture of Maggie Williams"
                objectFit="cover"
                layout="constrained"
                className="drop-shadow-mds"
              ></StaticImage>
            </div>

            <div className="w-full h-fit mt-8">
              <p className="text-[#214B59] text-[1.4rem]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. An
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Contentre,
                content here.
              </p>
            </div>

            <div className="w-full h-fit mt-4">
              <div className="flex flex-col">
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <ul className="mt-4 pl-8 list-disc">
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </li>
                  <li className="mt-2">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                </ul>

                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident velit illo voluptate maxime laborum ab iste
                  fuga explicabo culpa totam tempora quibusdam sed vero
                  molestiae cumque sit, non recusandae, officiis, placeat
                  obcaecati maiores. Illo libero possimus eos sed vero!
                </p>

                <div className="flex flex-row justify-center mt-8">
                  <Link
                    className="px-8 py-2 text-white text-xl rounded-md  bg-[#214B59] hover:bg-[#DCEBE4] hover:text-[#151619]
                     hover:duration-200 ease-in-out duration-200"
                    to="/"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Services
