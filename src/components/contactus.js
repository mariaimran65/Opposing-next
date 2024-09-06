import React from 'react';
import MyForm from './Modals/Form';
import Container from '@/layouts/Container';
import LandingPage from '@/layouts/LandingPage';

const crumbContent = [
  {
    text: 'Contact Us'
  }
];

function ContactUs() {
  return (
    <div>
      <LandingPage showBreadCrumb crumbContent={crumbContent}>
        <Container>
          <p className="text-primaryColor text-4xl text-center font-semibold pt-6 pb-3 uppercase">
            Contact Us
          </p>
          <MyForm />
        </Container>
      </LandingPage>
    </div>
  );
}

export default ContactUs;
