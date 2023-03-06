'use client'

import { useGlobalContext } from '../../../app/Context/status'
import { motion } from 'framer-motion'
import Doorpartnav from './Nav'
import Ironmongery from './Ironmonger'
import Doorcard from './Doors'
export default function Customizer(updateFields) {
  const { tab } = useGlobalContext()

  return (
    <>
      <Doorpartnav />
      {tab === 'Door' ? <Doorcard /> : <Ironmongery />}

      {/* <button
        className=" btnPrimary flex w-full justify-center rounded-xl py-3  text-2xl text-base font-medium leading-tight  text-white  shadow md:text-3xl lg:py-4  lg:text-2xl   xl:text-xl "
        type="submit"
      >
        ""
      </button> */}
    </>
  )
}

//  ;<motion.div
//    whileInView={{
//      opacity: 1,
//      x: -10,
//      transition: { duration: 0.5 },
//    }}
//    exit={{ opacity: 0, x: -40 }}
//  >
//    {' '}
//    <Ironmongery />
//  </motion.div>
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
