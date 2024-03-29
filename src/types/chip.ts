import { ReactNode } from 'react';

import { DefaultProps, Size } from '@/types';

export type ChipVariant = 'filled' | 'outlined';

export interface ChipProps extends DefaultProps {
  variant?: ChipVariant;
  size?: Size;
  color?: string;
  padding?: string;
  radius?: number;
  children?: ReactNode;
}
