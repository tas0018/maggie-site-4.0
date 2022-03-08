import React from "react"

function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col object-contain justify-center relative z-20">
      <video
        className="object-cover w-full h-full absolute -z-20 opacity-80"
        src="/videos/min-hero-video.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 h-full w-full bg-[#61AAD8] mix-blend-overlay"></div>
      <div className="flex flex-col text-white max-w-3xl ml-52 mt-8 z-30">
        <h1 className="text-6xl tracking-tight uppercase font-bold pb-2">
          Things Come and Go
        </h1>
        <h2 className="text-4xl tracking-tight font-bold pb-2">
          Like the waves of the Ocean
        </h2>
        <p className="text-lg tracking-tight font-bold pb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          quasi iusto necessitatibus adipisci corrupti recusandae soluta esse
          fugit molestias numquam.
        </p>

        <a
          href="/"
          className="btn bg-white text-black hover:tracking-hero transition-all ease-in-out duration-300 "
        >
          Book a Session
        </a>
      </div>
    </div>
  )
}

export default HeroSection
