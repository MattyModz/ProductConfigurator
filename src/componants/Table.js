import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Table({ rankings }) {
  const [sortType, setSortType] = useState('asc')
  const handleSort = (type) => {
    setSortType(type)
  }

  const sortedRankings = rankings.sort((a, b) => {
    if (sortType === 'asc') {
      return a.position - b.position
    } else {
      return b.position - a.position
    }
  })

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className=" mt-8 flex flex-col">
        <div className="-my-2 -mx-4  sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <a href="#" className="group inline-flex">
                        <Popover className="relative">
                          {({ open }) => (
                            <>
                              <Popover.Button
                                className={classNames(
                                  open ? 'text-gray-900' : '',
                                  'focus:red-600 group inline-flex items-center rounded-md text-sm  font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2'
                                )}
                              >
                                <span>Position</span>
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? 'text-gray-600' : 'text-gray-400',
                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                  )}
                                  aria-hidden="true"
                                />
                              </Popover.Button>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Popover.Panel className="absolute left-1/2 z-10 mt-3 ml-8 w-screen max-w-xs -translate-x-1/4 transform px-2 sm:px-0">
                                  <div className=" rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative bg-[#f5f5f5]    p-2">
                                      <div className="rounded-l bg-white p-2">
                                        <div className="hover:bg-gray-100">
                                          {' '}
                                          <button
                                            onClick={() => handleSort('asc')}
                                            className=""
                                          >
                                            Sort Ascending
                                          </button>
                                        </div>
                                        <div className="hover:bg-gray-100">
                                          <button
                                            onClick={() => handleSort('desc')}
                                          >
                                            Sort Descending
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      </a>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <a href="#" className="group z-50 inline-flex ">
                        Name
                      </a>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <a href="#" className="group inline-flex">
                        Logo
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          <ChevronDownIcon
                            className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <a href="#" className="group inline-flex">
                        Points
                        <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                          <ChevronDownIcon
                            className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white ">
                  {sortedRankings.length > 0 ? (
                    sortedRankings.map((rank) => (
                      <tr key={rank.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {rank.position}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {rank.Name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <Image
                            src={rank.Logo}
                            width={100}
                            height={100}
                            alt={rank.name}
                            className="rounded-full"
                          />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {rank.Points}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const solutions = [
  {
    name: 'Ascending',

    href: '#',
  },
  {
    name: 'Descending',

    href: '#',
  },
]
