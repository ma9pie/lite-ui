import { DefaultProps } from '@/types';

export type TableAlign = 'start' | 'center' | 'end';
export interface TableField {
  key: string;
  value: string;
  flex?: number;
  align?: TableAlign;
  render?: (props: any) => JSX.Element;
}
export interface TableRow {
  key: string;
  [property: string]: any;
}

export interface TableProps extends DefaultProps {
  field: TableField[];
  rows: TableRow[];
  minWidth?: number | string;
}
