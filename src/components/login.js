import React from 'react';
import Container from '@/layouts/Container';
import LandingPage from '@/layouts/LandingPage';
import LoginForm from './Modals/LoginForm';

function Login() {
  return (
    <div>
      <LandingPage from="login">
        <Container>
          <LoginForm />
        </Container>
      </LandingPage>
    </div>
  );
}

export default Login;
