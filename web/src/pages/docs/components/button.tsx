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
        description="Buttons the user can click."
        examples={[
          { title: 'Full', component: ButtonFull },
          { title: 'Size', component: ButtonSize },
          { title: 'Radius', component: ButtonRadius },
          { title: 'Color', component: ButtonColor },
          { title: 'Disabled', component: ButtonDisabled },
          { title: 'DisableRipple', component: ButtonDisableRipple },
        ]}
        apiData={[
          {
            property: 'full',
            type: ['boolean'],
            defaultValue: false,
            description: 'Full width button.',
          },
          {
            property: 'size',
            type: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            description: `Button's size.`,
          },
          {
            property: 'radius',
            type: ['none', 'sm', 'md', 'lg', 'full'],
            defaultValue: 'md',
            description: `Button's border radius.`,
          },
          {
            property: 'color',
            type: ['default', 'primary'],
            defaultValue: 'default',
            description: `Button's color.`,
          },
          {
            property: 'disabled',
            type: ['boolean'],
            defaultValue: false,
            description: 'Disabled button.',
          },
          {
            property: 'disableRipple',
            type: ['boolean'],
            defaultValue: false,
            description: 'Inactive ripple animation.',
          },
          {
            property: 'children',
            type: ['ReactNode'],
            description: `Button's content.`,
          },
          {
            property: 'onClick',
            type: ['(...args: any) => void'],
            description: `Button's click event.`,
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
