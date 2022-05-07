import React from "react"
import OnlineTherapyImg from "../images/online-therapy.jpg"
import MaggieImage from "../images/maggieTherapistPicture.jpg"
import TherapyCanDo from "../images/can-do.jpg"
import IndividualTherapy from "../images/individual-therapy.jpg"
import GroupTherapy from "../images/group-therapy.jpg"

function HeroGrid() {
  return (
    <div
      className="flex grow w-full bg-white min-h-[150vh] py-12 px-8 lg:py-24 lg:px-40 items-center
     justify-center"
    >
      <div className="min-h-[150vh] w-full grid gap-5 grid-cols-4 grid-rows-6 lg:grid-cols-6 lg:grid-rows-6 bg-white justify-center">
        <div className="flex items-center justify-center col-span-4 row-span-2 h-56 lg:h-auto bg-[#f4f4ed] rounded-sm">
          <div className="p-6 ">
            <h2 className="text-[#353535] text-3xl font-bold">Welcome</h2>
            <p className="text-[#353535] text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              eligendi.
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${OnlineTherapyImg})` }}
          className="flex items-center justify-center col-span-4 row-span-2 lg:col-span-2 lg:row-span-2 bg-cover bg-no-repeat p-6 bg-black/50 bg-blend-overlay rounded-sm h-56 lg:h-auto"
        >
          <h2 className="text-white text-3xl font-bold">Online Therapy</h2>
        </div>
        <div
          style={{ backgroundImage: `url(${MaggieImage})` }}
          className="flex items-center justify-center col-span-4 row-span-2 lg:col-span-3 lg:row-span-2 bg-cover bg-maggie-img bg-no-repeat rounded-sm h-56 lg:h-auto"
        ></div>
        <div className="flex items-center justify-center col-span-4 row-span-2 lg:col-span-3 lg:row-span-2 bg-sky-900 rounded-sm h-56 lg:h-auto">
          <h2 className="flex items-center justify-center text-white text-3xl font-bold h-[11rem] lg:h-auto">
            Meet Maggie
          </h2>
        </div>
        <div
          style={{ backgroundImage: `url(${TherapyCanDo})` }}
          className="flex items-center justify-center col-span-4 row-span-2 lg:col-span-2 lg:row-span-2 bg-cover bg-left bg-no-repeat bg-black/50 bg-blend-overlay rounded-sm h-56 lg:h-auto"
        >
          <h2 className="flex items-center justify-center text-white text-3xl font-bold h-[11rem] px-16 text-center lg:h-auto">
            How Therapy Can Help
          </h2>
        </div>
        <div
          style={{ backgroundImage: `url(${IndividualTherapy})` }}
          className="flex items-center justify-center col-span-4 row-span-2 lg:col-span-4 lg:row-span-2 bg-cover bg-no-repeat bg-black/50 bg-blend-overlay rounded-sm h-56 lg:h-auto"
        >
          <h2 className="flex items-center justify-center text-white text-3xl font-bold h-[11rem] lg:h-auto">
            Specialties
          </h2>
        </div>
      </div>
    </div>
  )
}

export default HeroGrid
