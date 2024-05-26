import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import {
  ButtonColor,
  ButtonDisabled,
  ButtonDisableRipple,
  ButtonFull,
  ButtonRadius,
  ButtonSize,
} from '@/components/pages/docs/exmaples/button';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Button"
        description="Button is used to trigger an action or perform an operation when clicked."
        imports={['Button']}
        src="Button.tsx"
        examples={[
          { title: 'Full', component: ButtonFull },
          { title: 'Size', component: ButtonSize },
          { title: 'Radius', component: ButtonRadius },
          { title: 'Color', component: ButtonColor },
          { title: 'Disabled', component: ButtonDisabled },
          { title: 'Disable ripple', component: ButtonDisableRipple },
        ]}
        apis={[
          {
            componentName: 'Button',
            propsData: [
              {
                property: 'full',
                type: ['boolean'],
                description: 'Full width button.',
                defaultValue: false,
              },
              {
                property: 'size',
                type: ['sm', 'md', 'lg'],
                description: `Button's size.`,
                defaultValue: 'md',
              },
              {
                property: 'radius',
                type: ['none', 'sm', 'md', 'lg', 'full'],
                description: `Button's border radius.`,
                defaultValue: 'md',
              },
              {
                property: 'color',
                type: ['default', 'primary', 'string'],
                description: `Button's color.`,
                defaultValue: 'default',
              },
              {
                property: 'disabled',
                type: ['boolean'],
                description: 'Disabled button.',
                defaultValue: false,
              },
              {
                property: 'disableRipple',
                type: ['boolean'],
                description: 'Inactive ripple animation.',
                defaultValue: false,
              },
              {
                property: 'children',
                type: ['ReactNode'],
                description: `Button's content.`,
                defaultValue: undefined,
              },
              {
                property: 'onClick',
                type: ['(...args: any) => void'],
                description: `onClick event.`,
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
