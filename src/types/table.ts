import { ReactNode } from 'react';

import { DefaultProps } from '@/types';

export type TableKey = number | string;
export type TableAlign = 'start' | 'center' | 'end';

export interface TableField {
  key: TableKey;
  value: string;
  flex?: number;
  align?: TableAlign;
  render?: (props: any) => ReactNode;
}
export interface TableRow {
  key: TableKey;
  [property: string]: any;
}

export interface TableProps extends DefaultProps {
  minWidth?: number | string;
  field: TableField[];
  rows: TableRow[];
}
