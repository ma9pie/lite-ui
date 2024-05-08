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
            defaultValue: 'filled',
            description: 'The chip appearance style.',
          },
          {
            property: 'size',
            type: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            description: 'The size of the chip.',
          },
          {
            property: 'color',
            type: ['string'],
            defaultValue: '#a3a3a3',
            description: 'The color of the chip.',
          },
          {
            property: 'radius',
            type: ['number'],
            defaultValue: 9999,
            description: 'The radius of the chip.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
