import React from 'react';
import tw, { styled } from 'twin.macro';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  ListGap,
  ListList,
  ListTabWidth,
} from '@/components/pages/docs/exmaples/list';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="List"
        description="Used to represent user's profile, symbol image or icon."
        examples={[
          { title: 'List', component: ListList },
          { title: 'TabWidth', component: ListTabWidth },
          { title: 'Gap', component: ListGap },
        ]}
        apiData={[
          {
            property: 'tabWidth',
            type: ['number'],
            description: 'Tab size.',
          },
          {
            property: 'gap',
            type: ['number'],
            description: 'Spacing between list item.',
          },
          {
            property: 'children',
            type: ['ReactNode'],
            description: 'List content.',
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