import { ReactNode } from 'react';

import { DefaultProps } from '@/types';

export interface ChipProps extends DefaultProps {
  textColor?: string;
  bgColor?: string;
  padding?: string;
  radius?: number;
  children?: ReactNode;
}
