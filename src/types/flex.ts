import { ReactNode } from 'react';

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'evenly';

export type AlignItem = 'start' | 'end' | 'center';

export interface FlexProps {
  key?: string;
  className?: string;
  flex?: number;
  wrap?: boolean;
  col?: boolean;
  gap?: number | string;
  justify?: JustifyContent;
  items?: AlignItem;
  children?: ReactNode;
}
