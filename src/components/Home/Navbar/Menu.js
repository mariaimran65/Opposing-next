import React from 'react';
import { Popover } from '@headlessui/react';

export default function ToolMenu({ path, isEarlyAccessPage }) {
  return (
    <Popover.Group className="hidden md:flex lg:gap-x-12 z-20">
      {/* <Popover>
        <Popover.Button
          onClick={() => setPopoverOpen(!popoverOpen)}
          className="flex items-center justify-center focus:outline-none gap-x-1 font-semi-bold px-4 text-[18px] text-[#000] font-normal"
        >
          <p
            className={` ${
              pathArray.includes(path) ? 'text-primaryColor' : 'text-[#000]'
            } text-[18px] font-normal`}
          >
            Products
          </p>

          <ChevronDownIcon
            className={`align-middle pt-0.5 h-6 w-5 flex-none text-primaryColor font-bold transform ${
              popoverOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
          afterLeave={handlePopoverClose} // handle popover close
        >
          {isEarlyAccessPage ? (
            <Popover.Panel className="absolute inset-x-0 top-[10rem] z-10 bg-white max-h-96 pt-0 shadow-lg  ring-gray-900/5">
              <div className="mx-auto grid max-w-[82rem] grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {toolMenuItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative h-60 flex flex-col justify-center items-center rounded-lg p-[0.6rem] text-sm leading-6 hover:bg-lightColor"
                  >
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-lg group-hover:bg-white">
                      <NextImage
                        className="h-12 w-12 text-gray-600 group-hover:text-indigo-600"
                        src={item.icon}
                        layout="fill"
                        sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                        alt="icon"
                      />
                    </div>
                    <Link
                      href={item.link}
                      className="mt-3 align-middle block font-semibold text-[#000] text-[1.4rem] "
                    >
                      {item.title}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 h-14 text-[15px] text-[#000] font-light text-center">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          ) : (
            <Popover.Panel className="absolute inset-x-0 top-20 z-10 bg-white max-h-96 pt-0 shadow-lg  ring-gray-900/5">
              <div className="mx-auto grid max-w-[82rem] grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {toolMenuItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative h-60 flex flex-col justify-center items-center rounded-lg p-[0.6rem] text-sm leading-6 hover:bg-lightColor"
                  >
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-lg group-hover:bg-white">
                      <NextImage
                        className="h-12 w-12 text-gray-600 group-hover:text-indigo-600"
                        src={item.icon}
                        layout="fill"
                        sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                        alt="icon"
                      />
                    </div>
                    <Link
                      href={item.link}
                      className="mt-3 align-middle block font-semibold text-[#000] text-[1.4rem] "
                    >
                      {item.title}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 h-14 text-[15px] text-[#000] font-light text-center">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          )}
        </Transition>
      </Popover> */}
    </Popover.Group>
  );
}
