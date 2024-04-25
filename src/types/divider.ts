import { DefaultProps } from '@/types';

export interface DividerProps extends DefaultProps {
  y?: number;
  size?: number;
  color?: string;
  dashed?: boolean;
  strokeDasharray?: number | string;
}
