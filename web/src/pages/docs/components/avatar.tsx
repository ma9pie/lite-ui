import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import { AvatarSize } from '@/components/pages/docs/exmaples/avatar';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Avatar"
        description="Used to represent user's profile, symbol image or icon."
        examples={[{ title: 'Size', component: AvatarSize }]}
        apiData={[
          {
            property: 'size',
            type: ['xs', 'sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
            description: 'Size of Avatar.',
          },
          {
            property: 'src',
            type: ['string'],
            description: 'Image source.',
          },
          {
            property: 'alt',
            type: ['string'],
            defaultValue: '',
            description: 'Image alternate.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
