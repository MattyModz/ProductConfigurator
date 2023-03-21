import { Stage, OrbitControls } from '@react-three/drei'
import Door1 from './Untitled'
// import Model from './Bobs'


// import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
export default function Experience() {
  //  }
  // const { tab } = useGlobalContext()
  return (
    <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{ type: 'accumulative', colorBlend: 2, opacity: 2 }}
        adjustCamera={0.9}
      >
        <Door1 />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

// initial data request for seasons - in vanilla react would fetchdata in a use effect with empty dependcancy to run on mount.

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
