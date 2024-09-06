import React from 'react';
import { motion } from 'framer-motion';
import { GrFacebookOption, GrLinkedinOption, GrMail } from 'react-icons/gr';

import { FaXTwitter } from 'react-icons/fa6';

import NextImage from './NextImage';

function TeamCard({ card }) {
  return (
    <section className="mb-20 text-center">
      <div className="mb-18 md:mb-0">
        <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex justify-center">
            <div className="flex justify-center -mt-[75px]">
              <NextImage
                src={`/assets/${card.coverImage}.png`}
                alt={card.name}
                width={500}
                height={500}
                className="h-[150px] w-[150px]"
              />
            </div>
          </div>
          <div className="p-6 min-h-[160px]">
            <h5 className="mb-4 text-lg font-bold">{card.name}</h5>
            <p className="mb-6 text-[18px]">{card.desc}</p>

            <ul className="mx-auto flex list-inside justify-center ">
              <motion.a
                href={card.facebook}
                target="_blank"
                className="px-2"
                whileHover={{
                  scale: 1.1
                }}
                transition={{
                  layout: {
                    duration: 1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
              >
                <GrFacebookOption />
              </motion.a>

              <motion.a
                href={card.linkedin || '#'}
                target="_blank"
                className="px-2"
                whileHover={{
                  scale: 1.1
                }}
                transition={{
                  layout: {
                    duration: 1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
              >
                {/* <!-- Linkedin --> */}
                <GrLinkedinOption />
              </motion.a>
              <motion.a
                href={`mailto:${card.gmail}`}
                className="px-2"
                whileHover={{
                  scale: 1.1
                }}
                transition={{
                  layout: {
                    duration: 1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
              >
                <GrMail />
              </motion.a>
              <motion.a
                href={card.X}
                target="_blank"
                className="px-2"
                whileHover={{
                  scale: 1.1
                }}
                transition={{
                  layout: {
                    duration: 1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
              >
                <FaXTwitter />
              </motion.a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCard;
