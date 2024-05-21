import { CSSProperties } from 'react';

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'evenly';
export type AlignItem = 'start' | 'end' | 'center';

export interface StyleProps {
  className?: string;
  style?: CSSProperties;
}
export interface DefaultProps extends StyleProps {
  key?: string;
}
