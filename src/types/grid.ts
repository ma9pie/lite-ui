import { ReactNode } from 'react';

import { DefaultProps } from '@/types';

export interface GridProps extends DefaultProps {
  repeatCount?: number | string;
  tracks?: string;
  gap?: number;
  children?: ReactNode;
}
