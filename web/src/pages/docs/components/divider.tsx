import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  DividerColor,
  DividerDashed,
  DividerSize,
  DividerY,
} from '@/components/pages/docs/exmaples/divider';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Divider"
        description="Divider is used as a line to separate sections within a page."
        imports={['Divider']}
        src="Divider.tsx"
        examples={[
          { title: 'Margin y', component: DividerY },
          { title: 'Size', component: DividerSize },
          { title: 'Color', component: DividerColor },
          { title: 'Dashed', component: DividerDashed },
        ]}
        apis={[
          {
            componentName: 'Divider',
            propsData: [
              {
                property: 'y',
                type: ['number'],
                description: 'Margin value in y-axis direction.',
                defaultValue: 0,
              },
              {
                property: 'size',
                type: ['number'],
                description: 'Thickness of line.',
                defaultValue: 1,
              },
              {
                property: 'color',
                type: ['string'],
                description: 'Color of line.',
                defaultValue: 'black',
              },
              {
                property: 'dashed',
                type: ['boolean'],
                description: 'Dashed style line.',
                defaultValue: false,
              },
              {
                property: 'strokeDasharray',
                type: ['number', 'string'],
                description: 'Dashed spacing of line.',
                defaultValue: 2,
              },
            ],
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
