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
            defaultValue: 1,
            description: 'x-axis spacing.',
          },
          {
            property: 'y',
            type: ['number'],
            defaultValue: 1,
            description: 'y-axis spacing.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
