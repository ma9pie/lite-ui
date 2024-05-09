export const SITE_URL = 'https://liteui-web.vercel.app/';
export const SITE_TITLE = 'Lite UI';
export const SITE_DESCRIPTION = 'Simple, fast and modern React UI library.';
export const SITE_OG_IMAGE = '';

export const SEO_CONFIG = {
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
