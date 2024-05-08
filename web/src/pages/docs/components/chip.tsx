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
        description="Chip is a component that can be used as a label or badge."
        examples={[
          { title: 'Varient', component: ChipVarient },
          { title: 'Size', component: ChipSize },
          { title: 'Color', component: ChipColor },
          { title: 'Radius', component: ChipRadius },
        ]}
        apiData={[
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
            defaultValue: '#a3a3a3',
          },
          {
            property: 'radius',
            type: ['number'],
            description: 'The radius of the chip.',
            defaultValue: 9999,
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
