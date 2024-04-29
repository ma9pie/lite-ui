import { MenuListItem } from '@/types';

const sortList = (arr: MenuListItem[]) => {
  return arr.sort(({ key: keyA }, { key: keyB }) => keyA.localeCompare(keyB));
};

export const MENU_LIST = [
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
      { key: 'alert', label: 'Alert', createdAt: '' },
      { key: 'list', label: 'List', createdAt: '' },
      { key: 'chip', label: 'Chip', createdAt: '' },
      { key: 'avatar', label: 'Avatar', createdAt: '' },
      { key: 'button', label: 'Button', createdAt: '' },
    ]),
  },
];
