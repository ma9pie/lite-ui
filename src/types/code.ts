import { DefaultProps } from '@/types';

export type CodeSize = 'sm' | 'md' | 'lg';
export interface CodeProps extends DefaultProps {
  size?: CodeSize;
  code: string;
  full?: boolean;
  hideIcon?: boolean;
}
