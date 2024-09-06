import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function Modal({ open, setOpen, children }) {
  const cancelButtonRef = useRef(null);
  if (!open) return null;

  return (
    <Transition.Root show={open} as={Fragment} className="">
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:mb-8 sm:mt-[9rem] sm:w-full sm:max-w-5xl ">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-gradient-to-r from-primaryColor/60 via-primaryColor/40 to-primaryColor/20">
                  <div className="">
                    <div className="mt-3 text-left sm:ml-4 sm:mt-0">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        <div className="flex  justify-end">
                          <div className="w-[70%]">
                            {' '}
                            <p className="text-md font-bold text-right">
                              MEET VIRTUAL COUNSELLOR
                            </p>
                          </div>
                          <div
                            className="w-[30%] flex justify-end cursor-pointer"
                            onClick={() => setOpen()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </Dialog.Title>
                      <div className="mt-2">{children}</div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
