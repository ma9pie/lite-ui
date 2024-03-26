import { DefaultProps } from '@/types';

export interface SwitchProps extends DefaultProps {
  defaultChecked?: boolean;
  size?: number;
  trackPadding?: number;
  duration?: number;
  disabled?: boolean;
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
