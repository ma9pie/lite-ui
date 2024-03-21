import { CSSProperties, ReactNode } from 'react';

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'evenly';
export type AlignItem = 'start' | 'end' | 'center';
export type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap';

export interface DefaultProps {
  key?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
export interface FlexProps extends DefaultProps {
  flex?: number;
  wrap?: Wrap;
  col?: boolean;
  gap?: number | string;
  justify?: JustifyContent;
  items?: AlignItem;
}
export interface GridProps extends DefaultProps {
  row?: number;
  col?: number;
  gap?: number;
  justify?: JustifyContent;
  items?: AlignItem;
}
export interface DividerProps extends DefaultProps {
  y?: number;
  size?: number;
  color?: string;
  dashed?: boolean;
  strokeDasharray?: number | string;
}
