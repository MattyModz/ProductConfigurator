'use client'
import { useState } from 'react'
import { useMultistepform } from './multisteps'
import { motion } from 'framer-motion'
import Customizer from '../customizer'

const INITIAL_DATA = {
  Door: '',
}

export default function Strategy() {
  const [data, setData] = useState(INITIAL_DATA)

  const [formStatus, setFormStatus] = useState(false)

  // useEffect(() => {
  //   formStatus === true
  //     ? setTimeout(() => {
  //         setDecided(true);
  //       }, 4300)
  //     : null;
  // }, []);
  // console.log(formStatus);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  //  <Intro {...data} updateFields={updateFields} />,
  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepform([
      <Customizer {...data} updateFields={updateFields} key={data} />,
      // <Colourdoor {...data} updateFields={updateFields} key={data} />,

      // <Book {...data} updateFields={updateFields} key={data} />,
    ])

  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    // setQuestions(false);
    // setShowModal(true);

    // onSubmitForm(data)

    // async function onSubmitForm(data) {
    //   const config = {
    //     method: 'post',
    //     url: `${process.env.NEXT_PUBLIC_API_URL}/api/strategy-call`,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     data: data,
    //   }

    //   try {
    //     const response = await axios(config)

    //     if (response.status == 200) {
    //       setFormStatus(true)
    //     }
    //   } catch (err) {}
    // }
  }

  return (
    <>
      <section className=" ">
        <form onSubmit={onSubmit}>
          {/* <div className="flex grid grid-cols-3 justify-center border">
            <div>
              {' '}
              <div className=" grid h-full items-center">
                {' '}
                {!isFirstStep && (
                  <button type="button" onClick={back}>
                    <Image
                      src={'/arrowleft.svg'}
                      height={30}
                      width={30}
                      className=""
                      alt="arrowleft"
                    />
                  </button>
                )}
              </div>
            </div>
            <div>
              {' '}
              <ul className="flex justify-center  p-4  ">
                <div className="flex  ">
                  {' '}
                  <li
                    className={`rounded-full p-2 px-4  ${
                      currentStepIndex === 0 ? 'bg-green-400' : 'bg-gray-50'
                    }`}
                  ></li>
                  <li
                    className={`rounded-full p-2 px-4  ${
                      currentStepIndex === 1 ? 'bg-green-400' : 'bg-gray-50'
                    }`}
                  ></li>
                  <li
                    className={`rounded-full p-2 px-4  ${
                      currentStepIndex === 2 ? 'bg-green-400' : 'bg-gray-50'
                    }`}
                  ></li>
                </div>
              </ul>
            </div>
          </div> */}

          <motion.div
            className="container h-full "
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
          >
            <div className="pb-8 lg:py-16 ">{step}</div>
          </motion.div>
        </form>
      </section>
    </>
  )
}
