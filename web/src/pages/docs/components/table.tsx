import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import { TableGeneral } from '@/components/pages/docs/exmaples/table';

const TABLE_FIELD_TYPE = `export interface TableField {
  key: number | string;
  value: string;
  flex?: number;
  align?: 'start' | 'center' | 'end';
  render?: (props: any) => ReactNode;
}`;
const TABLE_ROW_TYPE = `export interface TableRow {
  key: number | string;
  [property: string]: any;
}`;

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Table"
        description="A table is used to display rows of data."
        imports={['Table']}
        src="Table.tsx"
        examples={[{ title: undefined, component: TableGeneral }]}
        apis={[
          {
            componentName: 'Table',
            propsData: [
              {
                property: 'minWidth',
                type: ['number', 'string'],
                description: `Table's min width.`,
                defaultValue: undefined,
              },
              {
                property: 'field',
                type: ['TableField[]'],
                description: 'Table field data.',
                defaultValue: undefined,
              },
              {
                property: 'rows',
                type: ['TableRow[]'],
                description: 'Table row data.',
                defaultValue: undefined,
              },
            ],
          },
        ]}
        typesData={[
          { type: 'TableField', code: TABLE_FIELD_TYPE },
          { type: 'TableRow', code: TABLE_ROW_TYPE },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
