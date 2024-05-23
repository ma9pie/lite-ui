import { DocsListItem } from '@/types';

const sortList = (arr: DocsListItem[]) => {
  return arr.sort(({ key: keyA }, { key: keyB }) => keyA.localeCompare(keyB));
};

export const DOCS_LIST = [
  {
    key: 'guide',
    label: 'Guide',
    list: [
      { key: 'installation', label: 'Installation', createdAt: '2024-04-26' },
      {
        key: 'design-principles',
        label: 'Design Principles',
        createdAt: '2024-04-29',
      },
    ],
  },
  {
    key: 'components',
    label: 'Components',
    list: sortList([
      { key: 'flex', label: 'Flex', createdAt: '2024-05-09' },
      { key: 'grid', label: 'Grid', createdAt: '2024-05-10' },
      { key: 'divider', label: 'Divider', createdAt: '2024-05-08' },
      { key: 'spacer', label: 'Spacer', createdAt: '2024-05-11' },
      { key: 'switch', label: 'Switch', createdAt: '2024-05-11' },
      { key: 'spinner', label: 'Spinner', createdAt: '2024-05-11' },
      { key: 'alert', label: 'Alert', createdAt: '2024-05-02' },
      { key: 'list', label: 'List', createdAt: '2024-05-10' },
      { key: 'chip', label: 'Chip', createdAt: '2024-05-08' },
      { key: 'avatar', label: 'Avatar', createdAt: '2024-05-05' },
      { key: 'button', label: 'Button', createdAt: '2024-05-06' },
      { key: 'table', label: 'Table', createdAt: '2024-05-12' },
      { key: 'modal', label: 'Modal', createdAt: '2024-05-23' },
    ]),
  },
];
