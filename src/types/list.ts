import { ReactNode } from 'react';

import { DefaultProps } from '@/types';

export interface ListProps extends DefaultProps {
  tabWidth?: number;
  gap?: number;
  children?: ReactNode;
}
