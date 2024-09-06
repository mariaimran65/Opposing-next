import React, { useState } from 'react';
import Modal from './modal';
import MyForm from './Form';

function DemoComponent() {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div className="container mx-auto">
      <button
        className="px-4 py-2 mt-4 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal open={isOpen} setOpen={setOpen}>
        <MyForm />
      </Modal>
    </div>
  );
}

export default DemoComponent;
