import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import twitterIcon from '@iconify/icons-eva/twitter-fill';
import linkedinIcon from '@iconify/icons-eva/linkedin-fill';
import facebookIcon from '@iconify/icons-eva/facebook-fill';
import { Tooltip } from '@material-tailwind/react';
import { BASE_URI } from 'config';

const SOCIALS = [
  {
    name: 'Facebook',
    icon: facebookIcon,
    getHref: (url) => `https://www.facebook.com/sharer.php?u=${url}`,
    color: '#1877F2'
  },

  {
    name: 'Twitter',
    icon: twitterIcon,
    getHref: (url) => `https://twitter.com/intent/tweet?url=${url}`,
    color: '#55ACEE'
  },
  {
    name: 'Linkedin',
    icon: linkedinIcon,
    getHref: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    color: '#0A66C2'
  }
];

function Modal({ showModal, setShowModal, name, list, id }) {
  const [hasCopied, setCopied] = useState(false);
  const url = `${BASE_URI}/early-access?ref=${encodeURIComponent(id)}`;

  const convertStringToPascal = (str) => {
    return str
      .replace(/(\w)(\w*)/g, (g0, g1, g2) => {
        return g1.toUpperCase() + g2.toLowerCase();
      })
      .replace(/\s/g, ' ');
  };
  return (
    showModal && (
      <>
        <div
          style={{ zIndex: 1999 }}
          className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 m-0 md:m-12 lg:m-12 xl:m-12 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-center mt-10    rounded-t dark:border-gray-600">
                <h3 className="text-xl   font-semibold text-gray-900 dark:text-white">
                  Thank you, {name || 'Dan'}
                </h3>
              </div>
              <div className="flex  px-2 items-center justify-center mt-3    rounded-t dark:border-gray-600">
                <h4 className="text-lg  text-gray-900 dark:text-white">
                  Invite your friends and move up the waitlist!
                </h4>
              </div>
              <div
                role="presentation"
                className="absolute right-0 sm:right-[-40px] md:right-[-40px] lg:right-[-40px] xl:right-[-40px] cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <div
                  style={{
                    borderRadius: '50%',
                    padding: '5px 5px 5px 5px',
                    background: 'white',
                    marginRight: '5px',
                    height: '30px',
                    width: '30px'
                  }}
                >
                  <Icon
                    icon="gridicons:cross-small"
                    color="#303030"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className="p-6 my-5 lg:min-[567px] md:min-[567px]">
                <div className="flex flex-row justify-center gap-3">
                  {SOCIALS.map((item, i) => (
                    <span
                      role="presentation"
                      key={i}
                      className="border border-[#F1F1F1] rounded-full p-1 cursor-pointer  ml-[16px] "
                      onClick={() =>
                        window.open(item.getHref(url), '_blank').focus()
                      }
                    >
                      <Icon icon={item.icon} color={item.color} height={18} />
                    </span>
                  ))}
                  <Tooltip content={hasCopied ? 'Copied!' : 'Copy link'}>
                    <span
                      role="presentation"
                      className="border border-[#F1F1F1] rounded-full p-1 cursor-pointer  ml-[16px] "
                      onClick={() => {
                        setCopied(true);
                        navigator.clipboard.writeText(url);
                        setTimeout(() => setCopied(false), 1000);
                      }}
                    >
                      <Icon
                        icon="fluent:copy-24-regular"
                        color="#4E9B8F"
                        height={18}
                      />
                    </span>
                  </Tooltip>
                </div>
                <div className="flex items-center justify-center mt-7 mb-7   rounded-t dark:border-gray-600">
                  <h3 className="text-xl   font-semibold text-gray-900 dark:text-white">
                    Waiting list
                  </h3>
                </div>
                <div className="max-h-[250px]  min-h-[10rem] overflow-y-hidden">
                  <table className="w-full max-h-[200px] ring-1 ring-gray-200 rounded-md text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                      <tr className="border  bg-lightPurpleBg dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Waitlist ID
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Name
                        </th>
                      </tr>
                    </thead>
                    <tbody className="max-h-[200px] border">
                      {list?.slice(0, 3).map((item, index) => {
                        const { name, no } = item.node;
                        const waitListName = convertStringToPascal(name);
                        return (
                          <tr
                            key={index}
                            className="border-b  dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {no}
                            </th>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {waitListName || '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-40 fixed inset-0 z-50 bg-black" />
      </>
    )
  );
}

export default Modal;
