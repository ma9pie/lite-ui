import { ReactNode } from 'react';

import { AlignItem, DefaultProps, JustifyContent } from '@/types';

export type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap';

export interface FlexProps extends DefaultProps {
  flex?: number;
  wrap?: Wrap;
  col?: boolean;
  gap?: number | string;
  justify?: JustifyContent;
  items?: AlignItem;
  children?: ReactNode;
}
