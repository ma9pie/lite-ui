import { ReactNode } from 'react';

import { DefaultProps } from '@/types';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type ButtonColor = 'default' | 'primary';

export interface ButtonProps extends DefaultProps {
  size?: ButtonSize;
  radius?: ButtonRadius;
  color?: ButtonColor;
  disabled?: boolean;
  disableRipple?: boolean;
  children?: ReactNode;
  onClick?: (...args: any) => void;
}
