import { DefaultProps } from './';

export interface ListProps extends DefaultProps {
  list: ListTreeNode[];
  tabWidth?: number;
  gap?: number;
}

export interface ListTreeNode {
  key: string;
  value: string;
  children?: ListTreeNode[];
}
