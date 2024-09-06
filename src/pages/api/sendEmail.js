import React from 'react';
import { Resend } from 'resend'; // Assuming 'Resend' is the default export from 'resend'

import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(req, res) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: '2ndpassportstudygroup@gmail.com',
      subject: 'Message from 2nd passport contact form',
      react: React.createElement(ContactFormEmail, {
        name: req.body.name,
        phone: req.body.phone,
        passingYear: req.body.passingYear,
        qualification: req.body.qualification,
        city: req.body.city,
        country: req.body.country
      })
    });
    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json({
      success: true
    });
  } catch (error) {
    return {
      error
    };
  }
}
