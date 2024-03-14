import { ReactNode } from 'react';

export type JustifyContent =
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch';

export type AlignItem = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

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
