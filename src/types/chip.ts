import { ReactNode } from 'react';

import { DefaultProps } from '@/types';

export type ChipVariant = 'filled' | 'outlined';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface ChipProps extends DefaultProps {
  variant?: ChipVariant;
  size?: ChipSize;
  color?: string;
  radius?: number;
  children?: ReactNode;
}
