import React from 'react';
import Container from '@/layouts/Container';
import LandingPage from '@/layouts/LandingPage';
import RegisterForm from './Modals/RegisterForm';

function Register() {
  return (
    <div>
      <LandingPage from="register">
        <Container>
          <RegisterForm />
        </Container>
      </LandingPage>
    </div>
  );
}

export default Register;
