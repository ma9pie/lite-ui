import ReactGA from 'react-ga4';

import { firstToUpper } from '@/utils';

/**
 * [ReactGA.event params]
 * @param action: string
 * @param category: string
 * @param label?: string
 * @param value?: number
 * @param nonInteraction?: boolean
 * @param transport?: 'beacon' | 'xhr' | 'image'
 */

export enum Action {
  Click = 'Click',
}

export enum Category {
  Button = 'Button',
}
// Init GA
export const initializeGA = () => {
  const { hostname } = window.location;
  if (hostname === 'localhost') return;
  const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  if (!trackingId) return;
  ReactGA.initialize(trackingId);
};

// Tracking page view
export const trackPageView = (page: string) => {
  if (!page) return;
  ReactGA.set({ page });
  ReactGA.send('pageview');
};

// Button click event
export const trackButtonClick = (labels: string[]) => {
  ReactGA.event({
    action: Action.Click,
    category: Category.Button,
    label: labels.map((label) => firstToUpper(label)).join('/'),
  });
};
