import React from 'react';

import DocsLayout from '@/components/layouts/DocsLayout';
import DocsForm from '@/components/pages/docs/DocsForm';
import AlertIcon from '@/components/pages/docs/exmaples/alert/AlertIcon';
import AlertStatus from '@/components/pages/docs/exmaples/alert/AlertStatus';

const AlertPage = () => {
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
            property: 'status',
            type: `'success' | 'info' | 'warn' | 'error'`,
            description: 'Type of Alert styles',
            default: 'success',
          },
          {
            property: 'iconSize',
            type: 'Number',
            description: 'Size of icon',
            default: '20',
          },
          {
            property: 'hideIcon',
            type: 'Boolean',
            description: 'Hide icon',
            default: 'false',
          },
          {
            property: 'children',
            type: 'ReactNode',
            description: 'Alert content',
          },
        ]}
      ></DocsForm>
    </DocsLayout>
  );
};

export default AlertPage;
