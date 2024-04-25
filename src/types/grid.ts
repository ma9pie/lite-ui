import { ReactNode } from 'react';

import { AlignItem, DefaultProps, JustifyContent } from '@/types';

export interface GridProps extends DefaultProps {
  row?: number;
  col?: number;
  gap?: number;
  justify?: JustifyContent;
  items?: AlignItem;
  children?: ReactNode;
}
