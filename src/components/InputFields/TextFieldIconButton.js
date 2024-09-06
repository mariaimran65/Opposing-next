import { Icon } from '@iconify/react';
import React from 'react';

function TextFieldIconButton({
  icon,
  ButtonIcon,
  type,
  placeholder,
  onChange,
  onClick,
  email
}) {
  return (
    <div>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon
              icon={icon}
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            value={email}
            type={type}
            name="email"
            id="email"
            className="block w-full outline-none rounded-none rounded-l-md border-0 py-0 text-[14px] md:py-2.5 lg:py-2.5  pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryColor/70 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <button
          type="button"
          aria-label="Send email button"
          className="bg-primaryColor relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-primaryColor"
        >
          <Icon
            icon={ButtonIcon}
            className="-ml-0.5 h-5 w-5 text-white"
            aria-hidden="true"
            onClick={() => onClick()}
          />
        </button>
      </div>
    </div>
  );
}

export default TextFieldIconButton;
