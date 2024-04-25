import { AlignItem, JustifyContent } from '@/types';

export const justifyContent = (value?: JustifyContent) => {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'evenly':
      return 'space-evenly';
  }
};

export const alignItem = (value?: AlignItem) => {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
  }
};
