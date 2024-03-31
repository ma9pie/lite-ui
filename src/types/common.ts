import { CSSProperties } from 'react';

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'evenly';
export type AlignItem = 'start' | 'end' | 'center';
export type Wrap = 'wrap' | 'wrap-reverse' | 'nowrap';

export interface DefaultProps {
  key?: string;
  className?: string;
  style?: CSSProperties;
}
