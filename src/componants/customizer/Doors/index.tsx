'use client'
import { useState } from 'react'
import { useGlobalContext } from '../../../../app/Context/status'
import { motion } from 'framer-motion'

export default function Doorcard() {
  const [selected, setSelected] = useState(0)
  const { door, setDoor } = useGlobalContext()
  const { tab } = useGlobalContext()
  const { isButtonClicked, setIsButtonClicked } = useGlobalContext()
  console.log(tab)
  const datadoors = [
    { img: '/Static/traditional.png', type: 'traditional', alt: 'traditonal' },
  ]

  const handleImageClick = (event, i) => {
    event.preventDefault() // prevent form submission
    setDoor(datadoors[i].type)
    setIsButtonClicked(true)
  }

  console.log(door)

  // console.log(selected)
  return (
    <>
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
                    // value={el.img}
                    // onChange={(e) => updateFields({ img: e.target.value })}
                  />
                  {/* <button onClick={() => setDataValue([i])}>
                 <Image src={el.img} width={500} height={250} alt={'img'} /> 
              </button> */}
                </motion.div>
              </motion.div>
            </div>
          ))}

          {/* <input
        type="text"
        id="InputName"
        placeholder="What can we call you?"
        required
        name="fistname"
        value={Name}
        className="hover:-orange-400 w-full rounded-xl p-4 text-xl text-black "
        onChange={(e) => updateFields({ Name: e.target.value })}
      /> */}
        </div>
        {isButtonClicked && door !== '' && <Colourdoor />}
      </motion.section>

      {/* <button
        className=" btnPrimary flex w-full justify-center rounded-xl py-3  text-2xl text-base font-medium leading-tight  text-white  shadow md:text-3xl lg:py-4  lg:text-2xl   xl:text-xl "
        type="submit"
      >
        ""
      </button> */}
    </>
  )
}

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

// function Mobilelist({ years, setYear, fetchnewyear }) {
//   return (
//     <Tab.Group as="div" className="  block lg:hidden">
//       {({ selectedIndex }) => (
//         <>
//           <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 ">
//             <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 font-semibold sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
//               {years.map((year, featureIndex) => (
//                 <div key={year}>
//                   <button>
//                     <Tab
//                       className={clsx(
//                         'text-l rounded-lg bg-white p-2 px-4  text-black [&:not(:focus-visible)]:focus:outline-none',
//                         selectedIndex === featureIndex
//                           ? 'shadow-m rounded-l  border border-red-500 text-black shadow-red-500   lg:text-white'
//                           : 'text-black hover:text-red-500 lg:text-white'
//                       )}
//                       onClick={() => setYear(year)}
//                     >
//                       {year}
//                     </Tab>
//                   </button>
//                 </div>
//               ))}
//             </Tab.List>
//           </div>
//         </>
//       )}
//     </Tab.Group>
//   )
// }
