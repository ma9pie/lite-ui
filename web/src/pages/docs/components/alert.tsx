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
        examples={[
          { title: 'Status', component: AlertStatus },
          { title: 'Icon', component: AlertIcon },
        ]}
        apiData={[
          {
            property: 'status',
            type: ['success', 'info', 'warn', 'error'],
            defaultValue: 'success',
            description: 'Type of Alert styles.',
          },
          {
            property: 'iconSize',
            type: ['number'],
            defaultValue: 20,
            description: 'Size of icon.',
          },
          {
            property: 'hideIcon',
            type: ['boolean'],
            defaultValue: false,
            description: 'Hide icon.',
          },
          {
            property: 'children',
            type: ['ReactNode'],
            description: 'Alert content.',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
