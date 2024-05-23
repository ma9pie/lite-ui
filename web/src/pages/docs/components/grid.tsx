import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  GridAutoFill,
  GridRepeatCount,
  GridTracks,
} from '@/components/pages/docs/exmaples/grid';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Grid"
        description="Grid is used to align elements by specifying the column count."
        imports={['Grid']}
        src="Grid.tsx"
        examples={[
          { title: 'Auto fill', component: GridAutoFill },
          { title: 'RepeatCount', component: GridRepeatCount },
          { title: 'Tracks', component: GridTracks },
        ]}
        apis={[
          {
            componentName: 'Grid',
            propsData: [
              {
                property: 'repeatCount',
                type: ['number', 'string'],
                description: 'Repeat count in grid-template-columns property.',
                defaultValue: 1,
              },
              {
                property: 'tracks',
                type: ['string'],
                description: 'Repeat count in grid-template-columns property.',
                defaultValue: '1fr',
              },
              {
                property: 'gap',
                type: ['number', 'string'],
                description: 'Spacing between elements.',
                defaultValue: undefined,
              },
            ],
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
