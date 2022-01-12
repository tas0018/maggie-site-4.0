import React from "react"
import OnlineTherapyImg from "../images/online-therapy.jpg"
import MaggieImage from "../images/maggieTherapistPicture.jpg"
import TherapyCanDo from "../images/can-do.jpg"
import IndividualTherapy from "../images/individual-therapy.jpg"
import GroupTherapy from "../images/group-therapy.jpg"

function HeroGrid() {
  return (
    <div
      className="flex grow w-full bg-white min-h-[150vh] py-24 px-40 items-center
     justify-center"
    >
      <div className="min-h-[150vh] w-full grid gap-5 grid-cols-6 grid-rows-6 bg-white justify-center">
        <div className="flex items-center justify-center col-span-4 row-span-2 bg-[#f4f4ed]">
          <div className="p-6">
            <h2 className="text-[#353535] text-3xl font-bold">Welcome</h2>
            <p className="text-[#353535] text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              eligendi.
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${OnlineTherapyImg})` }}
          className="flex items-center justify-center col-span-2 row-span-2 bg-cover bg-no-repeat p-6 bg-black/50 bg-blend-overlay"
        >
          <h2 className="text-white text-3xl font-bold">Online Therapy</h2>
        </div>
        <div
          style={{ backgroundImage: `url(${MaggieImage})` }}
          className="flex items-center justify-center col-span-3 row-span-2 bg-cover bg-maggie-img bg-no-repeat"
        ></div>
        <div className="flex items-center justify-center col-span-3 row-span-2 bg-sky-900">
          <h2 className="text-white text-3xl font-bold">Meet Maggie</h2>
        </div>
        <div
          style={{ backgroundImage: `url(${TherapyCanDo})` }}
          className="flex items-center justify-center col-span-2 row-span-2 bg-cover bg-left bg-no-repeat bg-black/50 bg-blend-overlay"
        >
          <h2 className="text-white text-3xl font-bold">
            How Therapy can help
          </h2>
        </div>
        <div
          style={{ backgroundImage: `url(${IndividualTherapy})` }}
          className="flex items-center justify-center col-span-2 row-span-2 bg-cover bg-no-repeat bg-black/50 bg-blend-overlay"
        >
          <h2 className="text-white text-3xl font-bold">Individual</h2>
        </div>
        <div
          style={{ backgroundImage: `url(${GroupTherapy})` }}
          className="flex items-center justify-center col-span-2 row-span-2 bg-cover bg-no-repeat bg-black/50 bg-blend-overlay"
        >
          <h2 className="text-white text-3xl font-bold">Group</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroGrid
