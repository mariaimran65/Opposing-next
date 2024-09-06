import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import bgImage from '../../../public/assets/join-bg.jpg';
import { ListingFeatures } from '../../constants/listFeature';

const plans = [
  {
    name: 'Premium Plus',
    price: '$200.00',
    key: 'PremiumPlus',
    apiEndpoint: '/api/premium-plus'
  },
  {
    name: 'Premium',
    price: '$150.00',
    key: 'Premium',
    apiEndpoint: '/api/premium'
  },
  {
    name: 'Basic',
    price: '$99.00',
    key: 'Basic',
    apiEndpoint: '/api/basic'
  }
];

const handlePurchase = async (apiEndpoint) => {
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ plan: apiEndpoint })
    });
    const result = await response.json();
    console.log('Purchase successful:', result);
    // Handle success (e.g., show a success message)
  } catch (error) {
    console.error('Error purchasing plan:', error);
    // Handle error (e.g., show an error message)
  }
};

function PricingPlans() {
  return (
    <div className="container mx-auto  xs:px-1 sm:px-1 px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[33px] text-[#40454B] font-semibold">
          LIST YOUR VEHICLE
        </h1>
        <p className="text-[#40454B] text-[15px] font-semibold">
          Welcome back! List your vehicles here.
        </p>
      </div>

      {/* Separate Plans for sm and xs screens */}
      <div className="lg:hidden">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`mb-8 rounded shadow-md border ${
              plan.name === 'Premium Plus' ? 'bg-green-50' : ''
            }`}
            style={{ border: '1px solid #cccccc45' }}
          >
            <div className="p-6 xs:px-3 ">
              <h2 className="text-[21px] text-[#234579] font-semibold text-center mb-4">
                {plan.name}
              </h2>
              <ul className="">
                {ListingFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex justify-between items-end text-[13px] space-y-8 font-extrabold  ${
                      plan.name === 'Premium Plus'
                        ? 'text-[#09B715]'
                        : 'text-[#534F4F]'
                    }`}
                  >
                    <span className="">{feature.title}</span>
                    <span>
                      {typeof feature[plan.key] === 'boolean' ? (
                        feature[plan.key] ? (
                          <span className="text-[#09B715] font-extrabold">
                            &#10003;
                          </span>
                        ) : (
                          <span className="text-[#d81919] font-extrabold">
                            &#10005;
                          </span>
                        )
                      ) : (
                        feature[plan.key]
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-300  w-full" />
            <div className="text-center py-6 px-6">
              <p className="text-[23px] text-[#534F4F] font-semibold">
                {plan.price}
              </p>
              <button
                onClick={() => handlePurchase(plan.apiEndpoint)}
                className={`mt-2 px-8 font-bold py-3 text-[16px] rounded-full border-2 transition-colors duration-300 ${
                  plan.name === 'Premium Plus'
                    ? 'text-white bg-gradient-to-r from-[#0a2b5c] to-[#43679f] hover:text-[#234579] hover:bg-white'
                    : 'text-[#234579] bg-white hover:bg-[#234579] hover:text-white'
                }`}
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Plans Container for lg and md screens */}
      <div className="hidden lg:block">
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <div className="w-[35%] p-6 text-white relative rounded-tr-lg rounded-br-lg">
              <Image
                src={bgImage}
                layout="fill"
                objectFit="cover"
                alt="Background"
                className="absolute w-full h-full rounded-tl-md rounded-bl-md"
              />
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-5">Listing Features</h2>
                <ul>
                  {ListingFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="mb-7 text-[14px] font-semibold flex items-start"
                    >
                      <FaArrowRight className="mr-2 mt-1" /> {feature.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`w-[15%] py-[20px] flex flex-col items-center border ${
                  plan.name === 'Premium Plus' ? 'bg-green-50' : ''
                } ${
                  plan.name === 'Basic' ? 'rounded-tr-md rounded-br-md' : ''
                }`}
                style={{ border: '1px solid #cccccc45' }}
              >
                <div className=" ">
                  <h2 className="text-xl text-[#234679] font-semibold text-center mb-5">
                    {plan.name}
                  </h2>
                  <ul className="mb-5 text-center space-y-9 font-bold">
                    {ListingFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`mb-2 text-[14px] font-bold flex items-center justify-center ${
                          plan.name === 'Premium Plus'
                            ? 'text-[#09B715]'
                            : typeof feature[plan.key] === 'boolean'
                            ? ''
                            : 'text-[#534F4F]'
                        }`}
                      >
                        <span>
                          {typeof feature[plan.key] === 'boolean' ? (
                            feature[plan.key] ? (
                              <span className="text-[#09B715]">&#10003;</span>
                            ) : (
                              <span className="text-[#d81919]">&#10005;</span>
                            )
                          ) : (
                            feature[plan.key]
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-300 w-full" />
                <div className="text-center py-4">
                  <p className="text-[23px] text-[#534F4F] font-semibold">
                    {plan.price}
                  </p>
                  <button
                    onClick={() => handlePurchase(plan.apiEndpoint)}
                    className={`mt-2 px-8 font-bold py-3 text-[16px] rounded-full border-2 transition-colors duration-300 ${
                      plan.name === 'Premium Plus'
                        ? 'text-white bg-gradient-to-r from-[#0a2b5c] to-[#43679f] hover:text-[#234579] hover:bg-white'
                        : 'text-[#234579] bg-white hover:bg-[#234579] hover:text-white'
                    }`}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
