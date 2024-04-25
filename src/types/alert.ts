import { ReactNode } from 'react';

import { DefaultProps } from '@/types';

export type AlertStatus = 'success' | 'info' | 'warn' | 'error';

export interface AlertProps extends DefaultProps {
  status?: AlertStatus;
  iconSize?: number;
  hideIcon?: boolean;
  children?: ReactNode;
}
