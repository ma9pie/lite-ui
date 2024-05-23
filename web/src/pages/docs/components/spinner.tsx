import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  SpinnerColor,
  SpinnerDuration,
  SpinnerLineWidth,
  SpinnerSize,
} from '@/components/pages/docs/exmaples/spinner';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Spinner"
        description="Spinner is used to indicate loading status."
        imports={['Spinner']}
        src="Spinner.tsx"
        examples={[
          { title: 'Size', component: SpinnerSize },
          { title: 'Color', component: SpinnerColor },
          { title: 'Line width', component: SpinnerLineWidth },
          { title: 'Duration', component: SpinnerDuration },
        ]}
        apis={[
          {
            componentName: 'Spinner',
            propsData: [
              {
                property: 'size',
                type: ['number'],
                description: `Spinner's size.`,
                defaultValue: 32,
              },
              {
                property: 'color',
                type: ['string'],
                description: `Spinner's color.`,
                defaultValue: '#d4d4d4',
              },
              {
                property: 'lineWidth',
                type: ['number'],
                description: `Spinner's line thickness.`,
                defaultValue: 3,
              },
              {
                property: 'duration',
                type: ['number'],
                description: `Spinner's rotation time.`,
                defaultValue: 750,
              },
            ],
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
