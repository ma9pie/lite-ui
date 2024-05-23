import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  SwitchDisabled,
  SwitchDuration,
  SwitchGeneral,
  SwitchSize,
  SwitchTrackColor,
  SwitchTrackPadding,
} from '@/components/pages/docs/exmaples/switch';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Switch"
        description="Switch is used to users to toggle between two states."
        imports={['Switch']}
        src="Switch.tsx"
        examples={[
          { title: undefined, component: SwitchGeneral },
          { title: 'Size', component: SwitchSize },
          { title: 'Track padding', component: SwitchTrackPadding },
          { title: 'Track color', component: SwitchTrackColor },
          { title: 'Duration', component: SwitchDuration },
          { title: 'Disabled', component: SwitchDisabled },
        ]}
        apis={[
          {
            componentName: 'Switch',
            propsData: [
              {
                property: 'defaultChecked',
                type: ['boolean'],
                description: 'Initial state.',
                defaultValue: false,
              },
              {
                property: 'size',
                type: ['number'],
                description: `Switch's height.`,
                defaultValue: 32,
              },
              {
                property: 'trackPadding',
                type: ['number'],
                description: `Switch's track padding size.`,
                defaultValue: 4,
              },
              {
                property: 'trackColor',
                type: ['string'],
                description: `Switch's track background color.`,
                defaultValue: '#525252',
              },
              {
                property: 'duration',
                type: ['number'],
                description: `Animation duration.`,
                defaultValue: 150,
              },
              {
                property: 'disabled',
                type: ['boolean'],
                description: 'Disabled switch.',
                defaultValue: false,
              },
              {
                property: 'onChange',
                type: ['(value: boolean) => void'],
                description: 'onChange event.',
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
