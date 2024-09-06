import { productName } from '@/constants/productName';

export const toolMenuItems = [
  {
    title: 'Drip Campaigns',
    description: `Heat up your leads with our ice-cold drip campaigns`,
    link: '/email-drip-campaigns',
    icon: '/assets/Drip-Campaign.png',
    key: 'campaign'
  },
  {
    title: 'Email Verification',
    description: `Stop wasting time on undeliverable emails - get verified with ${productName}.`,
    link: '/email-verification',
    icon: '/assets/email-verification.png',
    key: 'email'
  },
  {
    title: 'Email Warmup',
    description: `Get your email reputation sizzling with our warmup feature.`,
    link: '/email-warmup',
    icon: '/assets/Warm-up.png',
    key: 'warmup'
  },
  {
    title: 'Hyper Personalization',
    description: `Create hyper-personalized emails using prospect-relevant data enriched through GoCustomer agents.`,
    link: '/ai-email-writer',
    icon: '/assets/ep.png',
    key: 'ep'
  }
];
