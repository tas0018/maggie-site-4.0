import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function PoemSection() {
  return (
    <div className="h-max bg-sky-100">
      <div className="flex justify-center py-12">
        <div className="flex flex-col px-8">
          <h1 className="text-7xl text-[#353535] semi-bold">Wild Geese</h1>
          <p className="text-lg text-[#353535] font-medium pl-12">
            You do not have to be good
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            You do not have to walk on your knees
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            For a hundred miles through the desert, repenting.
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            You only have to let the soft animal of your body
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            love what it loves.
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            Tell me about despair, yours, and I will tell you mine.
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            Meanwhile the world goes on.
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            Meanwhile the sun and the clear pebbles of the rain
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            are moving across the landscapes,
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            over the prairies and the deep trees,
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            the mountains and the rivers.
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            Meanwhile the wild geese, high in the clean blue air,
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            are heading home again.
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            Whoever you are, no matter how lonely,
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            the world offers itself to your imagination,
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            calls to you like the wild geese, harsh and exciting —
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            over and over announcing your place
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            in the family of things.
          </p>
          <p className="text-lg text-[#353535] font-medium pl-12">
            – Mary Oliver
          </p>
        </div>
        <div className="flex flex-col justify-center px-8">
          <StaticImage
            src="../images/wild-geese-2.png"
            width={500}
            alt="Geese Poem Picture"
          />
        </div>
      </div>
    </div>
  )
}

export default PoemSection
