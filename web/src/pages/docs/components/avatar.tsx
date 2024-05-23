import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  AvatarFallback,
  AvatarSize,
} from '@/components/pages/docs/exmaples/avatar';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Avatar"
        description="Avatar is used to display the user's profile, symbol image or icon."
        imports={['Avatar']}
        src="Avatar.tsx"
        examples={[
          { title: 'Fallback', component: AvatarFallback },
          { title: 'Size', component: AvatarSize },
        ]}
        apis={[
          {
            componentName: 'Avatar',
            propsData: [
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
            ],
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
