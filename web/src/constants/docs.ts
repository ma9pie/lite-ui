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
      { key: 'flex', label: 'Flex', createdAt: '' },
      { key: 'grid', label: 'Grid', createdAt: '' },
      { key: 'divider', label: 'Divider', createdAt: '' },
      { key: 'spacer', label: 'Spacer', createdAt: '' },
      { key: 'switch', label: 'Switch', createdAt: '' },
      { key: 'spinner', label: 'Spinner', createdAt: '' },
      { key: 'alert', label: 'Alert', createdAt: '2024-05-02' },
      { key: 'list', label: 'List', createdAt: '' },
      { key: 'chip', label: 'Chip', createdAt: '' },
      { key: 'avatar', label: 'Avatar', createdAt: '2024-05-06' },
      { key: 'button', label: 'Button', createdAt: '' },
    ]),
  },
];
