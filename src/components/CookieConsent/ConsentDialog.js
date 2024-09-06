import React from 'react';

function Container({ children }) {
  return (
    <div className="fixed  z-[100] bottom-4 left-4 w-96 h-44 p-5 flex flex-col justify-between items-center bg-white shadow-lg rounded-lg">
      {children}
    </div>
  );
}

export default function ConsentDialog({ onConsent }) {
  return (
    <Container>
      <div className="text-lg">
        This website uses cookies to ensure you get the best
        experience.&nbsp;&nbsp;
        <a
          href="/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="underline text-primaryColor"
        >
          Privacy Policy
        </a>
      </div>
      <button
        type="button"
        onClick={onConsent}
        className="bg-primaryColor hover:bg-secondaryColor text-white font-bold py-2 px-4 rounded-md shadow-2xl"
      >
        <div className="text-lg">I understand</div>
      </button>
    </Container>
  );
}
