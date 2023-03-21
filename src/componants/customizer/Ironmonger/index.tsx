'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'
import { useGlobalContext } from '../../../../app/Context/status'
function Ironmongery() {
  const [selected, setSelected] = useState(0)
  const { IM, setIM } = useGlobalContext()
  console.log(IM)

  const datadoors = [
    { img: '/Static/doorhandle.webp', type: 'Doorhandle', alt: 'Doorhandle' },
    { img: '/Static/doorknob.webp', type: 'Doorknob', alt: 'Doorknob' },
  ]
  const handleImageClick = (event, i) => {
    event.preventDefault() // prevent form submission
    setIM(datadoors[i].type)
  }
  return (
    <motion.section>
      <div className=" flex   overflow-auto lg:max-w-none lg:grid-cols-3 ">
        {datadoors.map((el, i) => (
          <div className=" " key={i}>
            <motion.div
              className={`space-between flex rounded-xl bg-black bg-opacity-25 opacity-50 md:m-2 ${
                selected === i && 'cardselect '
              }`}
              onClick={() => setSelected(i)}
            >
              <motion.div className="   ">
                <input
                  className="bg-cover"
                  type="image"
                  src={el.img}
                  alt={el.alt}
                  name="submitwwS"
                  height={200}
                  width={200}
                  onClick={(event) => handleImageClick(event, i)}
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Ironmongery

function Colourdoor(updateFields) {
  const [selectedcolor, setSelectedColor] = useState(0)
  const { color, setColor } = useGlobalContext()
  console.log(color)
  const data = [
    { color: '#EEE9E7', colorName: 'Wevet' },
    { color: '#C4BEB4', colorName: 'Purbeck stone' },
    { color: '#DFD6CB', colorName: 'Skimming Stone' },
    { color: '#C0C2B3', colorName: 'Mizzle' },
  ]

  // Wevet #EEE9E7
  // Purbeck Stone #C4BEB4
  // DFD6CB Skimming stone
  // Mizzle C0C2B3
  const handleColorChange = (i) => {
    // prevent form submission
    setColor(data[i].color)
  }

  return (
    <>
      <motion.div
        className="flex cursor-pointer overflow-auto lg:max-w-none lg:grid-cols-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35 },
        }}
        viewport={{ once: true }}
      >
        {data.map((el, i) => (
          <div className="" key={i}>
            <motion.div
              className={`space-between rounded-full bg-black bg-opacity-25 opacity-50 md:m-2 ${
                selectedcolor === i && 'cardselect '
              }`}
              onClick={() => handleColorChange(i)}
              style={{ backgroundColor: el.color }}
            >
              <motion.div className="flex h-20 w-20 items-center justify-center rounded-full text-center">
                {color === el.color ? `${el.colorName}` : ''}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  )
}
