import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  FlexCol,
  FlexFlex,
  FlexGap,
  FlexItems,
  FlexJustify,
  FlexWrap,
} from '@/components/pages/docs/exmaples/flex';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Flex"
        description="Flex is a component for aligning layout containers."
        examples={[
          { title: 'Flex', component: FlexFlex },
          { title: 'Wrap', component: FlexWrap },
          { title: 'Col', component: FlexCol },
          { title: 'Gap', component: FlexGap },
          { title: 'Justify', component: FlexJustify },
          { title: 'Items', component: FlexItems },
        ]}
        apiData={[
          {
            property: 'flex',
            type: ['number'],
            description: 'CSS flex properties.',
          },
          {
            property: 'wrap',
            type: ['wrap', 'wrap-reverse', 'nowrap'],
            description: 'CSS flex-wrap properties.',
          },
          {
            property: 'col',
            type: ['boolean'],
            description:
              'Properties for whether the flex direction is vertical or not.',
          },
          {
            property: 'gap',
            type: ['number', 'string'],
            description: 'Spacing between elements.',
          },
          {
            property: 'justify',
            type: ['start', 'end', 'center', 'between', 'evenly'],
            description: 'CSS justify-content properties.',
          },
          {
            property: 'items',
            type: ['start', 'end', 'center'],
            description: 'CSS align-items properties.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
