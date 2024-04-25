import { Chip, Flex } from '@ma9pie/lite-ui';
import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { isNew } from '@/utils';

interface ListItem {
  key: string;
  label: string;
  createdAt: string;
}

const sortList = (arr: ListItem[]) => {
  return arr.sort(({ key: keyA }, { key: keyB }) => keyA.localeCompare(keyB));
};

const MENU_LIST = [
  {
    key: 'guide',
    label: 'Guide',
    list: sortList([
      { key: 'installation', label: 'Installation', createdAt: '' },
    ]),
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

const SideMenu = () => {
  return (
    <Wrapper>
      <Flex col gap={8}>
        {MENU_LIST.map((category) => (
          <Flex key={category.key} col gap={4}>
            <CategoryName>{category.label}</CategoryName>
            <Flex col gap={2}>
              {category.list.map((component) => (
                <List
                  key={component.key}
                  href={`/docs/${category.key}/${component.key}`}
                  style={{
                    pointerEvents: component.createdAt ? 'auto' : 'none',
                  }}
                >
                  {component.label}
                  {(() => {
                    const { createdAt } = component;
                    if (!createdAt) {
                      return <PreparingChip>Preparing</PreparingChip>;
                    }
                    if (isNew(createdAt)) {
                      return <NewChip>New</NewChip>;
                    }
                  })()}
                </List>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default SideMenu;

const Wrapper = styled.div`
  ${tw`p-4 min-h-[calc(100vh-64px)]`};
`;
const CategoryName = styled.p`
  ${tw`text-2xl font-semibold`};
`;
const List = styled(Link)`
  ${tw`flex items-center gap-1 text-base text-neutral-500 px-2 py-1 rounded-md transition-colors duration-300`};
  ${tw`hover:(text-neutral-700 bg-neutral-100)`};
`;
const PreparingChip = styled(Chip)`
  ${tw`!h-5 !text-xs text-white !bg-neutral-300 !px-2`};
`;
const NewChip = styled(Chip)`
  ${tw`!h-5 !text-xs text-white !bg-blue-500 !px-2`};
`;
