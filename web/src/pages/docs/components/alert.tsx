import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import { AlertIcon, AlertStatus } from '@/components/pages/docs/exmaples/alert';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Alert"
        description="Alert is used to display messages that require attention."
        imports={['Alert']}
        src="Alert.tsx"
        examples={[
          { title: 'Status', component: AlertStatus },
          { title: 'Icon', component: AlertIcon },
        ]}
        apis={[
          {
            componentName: 'Alert',
            propsData: [
              {
                property: 'status',
                type: ['success', 'info', 'warn', 'error'],
                description: 'Type of Alert styles.',
                defaultValue: 'success',
              },
              {
                property: 'iconSize',
                type: ['number'],
                description: 'Size of icon.',
                defaultValue: 20,
              },
              {
                property: 'hideIcon',
                type: ['boolean'],
                description: 'Hide icon.',
                defaultValue: false,
              },
              {
                property: 'children',
                type: ['ReactNode'],
                description: 'Alert content.',
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
