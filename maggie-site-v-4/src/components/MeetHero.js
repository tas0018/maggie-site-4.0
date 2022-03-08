import React from "react"
import MaggieHero from "../images/temp-Bulldog.jpg"

function MeetHero() {
  return (
    <div
      style={{ backgroundImage: `url(${MaggieHero})` }}
      className="h-[80vh] bg-no-repeat bg-cover bg-bottom flex justify-center bg-fixed"
    >
      <div className=" flex flex-col justify-center ">
        <h1 className="text-5xl text-white">Meet Maggie Williams</h1>
      </div>
    </div>
  )
}

export default MeetHero
