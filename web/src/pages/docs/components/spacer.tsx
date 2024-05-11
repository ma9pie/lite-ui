import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import { SpacerX, SpacerY } from '@/components/pages/docs/exmaples/spacer';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Spacer"
        description="Spacer is used to create spacing between components."
        examples={[
          { title: 'Horizontal', component: SpacerX },
          { title: 'Vertical', component: SpacerY },
        ]}
        apiData={[
          {
            property: 'x',
            type: ['number'],
            description: 'x-axis spacing.',
            defaultValue: 1,
          },
          {
            property: 'y',
            type: ['number'],
            description: 'y-axis spacing.',
            defaultValue: 1,
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
