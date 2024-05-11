import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import { AvatarSize } from '@/components/pages/docs/exmaples/avatar';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Avatar"
        description="Avatar is used to display the user's profile, symbol image or icon."
        examples={[{ title: 'Size', component: AvatarSize }]}
        apiData={[
          {
            property: 'size',
            type: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Size of Avatar.',
            defaultValue: 'md',
          },
          {
            property: 'src',
            type: ['string'],
            description: 'Image source.',
            defaultValue: undefined,
          },
          {
            property: 'alt',
            type: ['string'],
            description: 'Image alternate.',
            defaultValue: '',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
