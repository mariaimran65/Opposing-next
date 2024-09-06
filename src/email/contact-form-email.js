import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function ContactFormEmail({
  name,
  phone,
  passingYear,
  qualification,
  city,
  country
}) {
  return (
    <Html>
      <Head />
      <Preview>New message from 2ndpassportstudygroup</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Hr />
              <Text>The sender's name is: {name}</Text>
              <Text>The sender's phone is: {phone}</Text>
              <Text>The sender's passing year is: {passingYear}</Text>
              <Text>The sender's qualification is: {qualification}</Text>
              <Text>The sender's city is: {city}</Text>
              <Text>The sender's country is: {country}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
