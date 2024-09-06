import { BASE_URI } from 'config';
import { productName } from './productName';

const homepage = {
  title: `Opposing Cylinders`,
  url: BASE_URI,
  cover: `${BASE_URI}/images/2ndpassport-preview.jpg`,
  description: `Unlock your second passport with expert guidance! Join our study group led by dedicated education consultants. Gain insights, strategies, and support for your dual citizenship journey. Start today!`
};

export default {
  homepage,
  fallback: homepage,
  browsevehicles: {
    title: `Browse Vehicles`,
    url: `${BASE_URI}/team`,
    description: `Have questions or inquiries? Contact ${productName} today. Our dedicated team is here to assist you with all your study abroad needs. Reach out to us for personalized guidance, consultations, and support on your journey to studying overseas.`
  },
  listyourvehicle: {
    title: `List Your Vehicle`,
    url: `${BASE_URI}/about`,
    description: `Discover your gateway to superior international education with ${productName}. Join a dynamic consultancy experiencing rapid growth, offering life-changing opportunities for your academic pursuits abroad.`
  },
  browseparts: {
    title: `Browse Parts`,
    url: `${BASE_URI}/contactus`,
    description: `Have questions or inquiries? Contact ${productName} today. Our dedicated team is here to assist you with all your study abroad needs. Reach out to us for personalized guidance, consultations, and support on your journey to studying overseas.`
  }
};
