import { DefaultProps } from '@/types';

export interface SwitchProps extends DefaultProps {
  size?: number;
  trackPadding?: number;
  duration?: number;
  disabled?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export interface TrackProps {
  checked: boolean;
  size: number;
  padding: number;
  duration: number;
  disabled: boolean;
}

export interface HandleProps {
  checked: boolean;
  size: number;
  padding: number;
  duration: number;
}
