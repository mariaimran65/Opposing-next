'use server';

import React from 'react';
import { Resend } from 'resend'; // Assuming 'Resend' is the default export from 'resend'

import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend('re_5Jvpvckj_77aAnop6s7V3eVkbAerYrZ9J');

function SendEmail(values) {
  let data;
  try {
    data = resend.emails.send({
      from: 'onboarding@resend.dev',
      to: '2ndpassportstudygroup@gmail.com',
      subject: 'Message from 2nd passport contact form',
      react: React.createElement(ContactFormEmail, {
        name: values.name,
        phone: values.phone,
        passingYear: values.passingYear,
        qualification: values.qualification,
        city: values.city,
        country: values.country
      })
    });
  } catch (error) {
    return {
      error
    };
  }

  return {
    data
  };
}
export default SendEmail;
