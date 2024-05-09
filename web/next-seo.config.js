import {
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from '@/constants';

const seoConfig = {
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: SITE_OG_IMAGE,
        alt: 'og image',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
