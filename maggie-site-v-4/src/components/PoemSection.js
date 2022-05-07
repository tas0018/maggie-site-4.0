import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function PoemSection() {
  return (
    <div className="h-max bg-cyan-900">
      <div className="flex relative justify-center py-8 px-4">
        <div className="flex flex-col text-center font-Alata">
          <h1 className="text-4xl text-white semi-bold py-8">Wild Geese</h1>
          <p className="text-xl py-1 text-white font-medium">
            You do not have to be good
          </p>
          <p className="text-xl py-1 text-white font-medium">
            You do not have to walk on your knees
          </p>
          <p className="text-xl py-1 text-white font-medium">
            For a hundred miles through the desert, repenting.
          </p>
          <p className="text-xl py-1 text-white font-medium">
            You only have to let the soft animal of your body
          </p>
          <p className="text-xl py-1 text-white font-medium">
            love what it loves.
          </p>
          <p className="text-xl py-1 text-white font-medium">
            Tell me about despair, yours, and I will tell you mine.
          </p>
          <p className="text-xl py-1 text-white font-medium">
            Meanwhile the world goes on.
          </p>
          <p className="text-xl py-1 text-white font-medium">
            Meanwhile the sun and the clear pebbles of the rain
          </p>
          <p className="text-xl py-1 text-white font-medium">
            are moving across the landscapes,
          </p>
          <p className="text-xl py-1 text-white font-medium">
            over the prairies and the deep trees,
          </p>
          <p className="text-xl py-1 text-white font-medium">
            the mountains and the rivers.
          </p>
          <p className="text-xl py-1 text-white font-medium">
            Meanwhile the wild geese, high in the clean blue air,
          </p>
          <p className="text-xl py-1 text-white font-medium">
            are heading home again.
          </p>
          <p className="text-xl py-1 text-white font-medium">
            Whoever you are, no matter how lonely,
          </p>
          <p className="text-xl py-1 text-white font-medium">
            the world offers itself to your imagination,
          </p>
          <p className="text-xl py-1 text-white font-medium">
            calls to you like the wild geese, harsh and exciting —
          </p>
          <p className="text-xl py-1 text-white font-medium">
            over and over announcing your place
          </p>
          <p className="text-xl py-1 text-white font-medium">
            in the family of things.
          </p>
          <p className="text-2xl py-8 text-white font-medium">– Mary Oliver</p>
        </div>
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <StaticImage
            className="mix-blend-normal opacity-90"
            src="../images/poemImg.png"
            width={700}
            alt="Poem Background Image"
          />
        </div>
      </div>
    </div>
  )
}

export default PoemSection
