'use client'

import Experience from '../src/componants/Expirience'

import Strategy from '../src/componants/Multi-step-form.jsx'

export default function Index() {
  return (
    <>
      <div className=" h-screen bg-[#F0F2F4] lg:px-32 ">
        <div className=" h-1/2 ">
          <Experience />
        </div>

        <div>
          <Strategy />
        </div>
      </div>
    </>
  )
}
