import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  ChipColor,
  ChipRadius,
  ChipSize,
  ChipVarient,
} from '@/components/pages/docs/exmaples/chip';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Chip"
        description="Chips are used as labels or badges."
        imports={['Chip']}
        src="Chip.tsx"
        examples={[
          { title: 'Varient', component: ChipVarient },
          { title: 'Size', component: ChipSize },
          { title: 'Color', component: ChipColor },
          { title: 'Radius', component: ChipRadius },
        ]}
        apis={[
          {
            componentName: 'Chip',
            propsData: [
              {
                property: 'varient',
                type: ['filled', 'outlined'],
                description: 'The chip appearance style.',
                defaultValue: 'filled',
              },
              {
                property: 'size',
                type: ['sm', 'md', 'lg'],
                description: 'The size of the chip.',
                defaultValue: 'md',
              },
              {
                property: 'color',
                type: ['string'],
                description: 'The color of the chip.',
                defaultValue: '#d4d4d4',
              },
              {
                property: 'radius',
                type: ['number'],
                description: 'The radius of the chip.',
                defaultValue: 9999,
              },
            ],
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
