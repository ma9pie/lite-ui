import { CSSProperties, ReactNode } from 'react';

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'evenly';

export type AlignItem = 'start' | 'end' | 'center';
export type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap';

export interface FlexProps {
  key?: string;
  className?: string;
  style?: CSSProperties;
  flex?: number;
  wrap?: Wrap;
  col?: boolean;
  gap?: number | string;
  justify?: JustifyContent;
  items?: AlignItem;
  children?: ReactNode;
}
