import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  DividerColor,
  DividerDashed,
  DividerSize,
  DividerY,
} from '@/components/pages/docs/exmaples/divider';

export interface DividerProps {
  y?: number;
  size?: number;
  color?: string;
  dashed?: boolean;
  strokeDasharray?: number | string;
}

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Divider"
        description="Divider is a line that separates sections within a page."
        examples={[
          { title: 'Margin y', component: DividerY },
          { title: 'Size', component: DividerSize },
          { title: 'Color', component: DividerColor },
          { title: 'Dashed', component: DividerDashed },
        ]}
        apiData={[
          {
            property: 'y',
            type: ['number'],
            defaultValue: 0,
            description: 'Margin value in y-axis direction.',
          },
          {
            property: 'size',
            type: ['number'],
            defaultValue: 1,
            description: 'Thickness of line.',
          },
          {
            property: 'color',
            type: ['string'],
            defaultValue: 'black',
            description: 'Color of line.',
          },
          {
            property: 'dashed',
            type: ['boolean'],
            defaultValue: false,
            description: 'Dashed style line.',
          },
          {
            property: 'strokeDasharray',
            type: ['number', 'string'],
            defaultValue: 2,
            description: 'Dashed spacing of line.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
