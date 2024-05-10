import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import { GridCol, GridGap } from '@/components/pages/docs/exmaples/grid';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Flex"
        description="Flex is a component for aligning layout containers."
        examples={[
          { title: 'Col', component: GridCol },
          { title: 'Gap', component: GridGap },
        ]}
        apiData={[
          {
            property: 'col',
            type: ['number'],
            description: 'Repeat count of grid-template-columns properties.',
          },
          {
            property: 'gap',
            type: ['number', 'string'],
            description: 'Spacing between elements.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
