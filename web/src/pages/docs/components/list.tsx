import React from 'react';
import tw, { styled } from 'twin.macro';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  ListGap,
  ListGeneral,
  ListTabWidth,
} from '@/components/pages/docs/exmaples/list';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="List"
        description="Used to represent user's profile, symbol image or icon."
        imports={['List']}
        src="List.tsx"
        examples={[
          { title: undefined, component: ListGeneral },
          { title: 'Tab width', component: ListTabWidth },
          { title: 'Gap', component: ListGap },
        ]}
        apis={[
          {
            componentName: 'List',
            propsData: [
              {
                property: 'tabWidth',
                type: ['number'],
                description: 'Tab size.',
                defaultValue: undefined,
              },
              {
                property: 'gap',
                type: ['number'],
                description: 'Spacing between list item.',
                defaultValue: undefined,
              },
              {
                property: 'children',
                type: ['ReactNode'],
                description: 'List content.',
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

const SubText = styled.div`
  ${tw`text-xs text-neutral-500`};
`;
