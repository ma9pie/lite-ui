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
        description="Flex is used to align elements."
        imports={['Flex']}
        src="Flex.tsx"
        examples={[
          { title: 'Flex', component: FlexFlex },
          { title: 'Wrap', component: FlexWrap },
          { title: 'Col', component: FlexCol },
          { title: 'Gap', component: FlexGap },
          { title: 'Justify', component: FlexJustify },
          { title: 'Items', component: FlexItems },
        ]}
        apis={[
          {
            componentName: 'Flex',
            propsData: [
              {
                property: 'flex',
                type: ['number'],
                description: 'CSS flex properties.',
                defaultValue: undefined,
              },
              {
                property: 'wrap',
                type: ['wrap', 'wrap-reverse', 'nowrap'],
                description: 'CSS flex-wrap properties.',
                defaultValue: undefined,
              },
              {
                property: 'col',
                type: ['boolean'],
                description:
                  'Properties for whether the flex direction is vertical or not.',
                defaultValue: undefined,
              },
              {
                property: 'gap',
                type: ['number', 'string'],
                description: 'Spacing between elements.',
                defaultValue: undefined,
              },
              {
                property: 'justify',
                type: ['start', 'end', 'center', 'between', 'evenly'],
                description: 'CSS justify-content properties.',
                defaultValue: undefined,
              },
              {
                property: 'items',
                type: ['start', 'end', 'center'],
                description: 'CSS align-items properties.',
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
