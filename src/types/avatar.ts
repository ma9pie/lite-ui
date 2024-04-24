import { DefaultProps } from './';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends DefaultProps {
  size?: AvatarSize;
  src?: string;
}
