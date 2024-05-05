import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import AlertIcon from '@/components/pages/docs/exmaples/alert/AlertIcon';
import AlertStatus from '@/components/pages/docs/exmaples/alert/AlertStatus';

const DocsComponentPage = () => {
  return (
    <DocsLayout>
      <DocsForm
        name="Alert"
        description="Display messages that require attention."
        examples={[
          { title: 'Status', component: AlertStatus },
          { title: 'Icon', component: AlertIcon },
        ]}
        apiData={[
          {
            key: '0',
            property: 'status',
            type: ['success', 'info', 'warn', 'error'],
            description: 'Type of Alert styles',
            defaultValue: 'success',
          },
          {
            key: '1',
            property: 'iconSize',
            type: ['number'],
            description: 'Size of icon',
            defaultValue: 20,
          },
          {
            key: '2',
            property: 'hideIcon',
            type: ['boolean'],
            description: 'Hide icon',
            defaultValue: false,
          },
          {
            key: '3',
            property: 'children',
            type: ['ReactNode'],
            description: 'Alert content',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default DocsComponentPage;
