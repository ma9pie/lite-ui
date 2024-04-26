import { Chip, Flex } from '@ma9pie/lite-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { MENU_LIST } from '@/constants';
import { isNewComponent } from '@/utils';

interface ListItem {
  key: string;
  label: string;
  createdAt: string;
}

const sortList = (arr: ListItem[]) => {
  return arr.sort(({ key: keyA }, { key: keyB }) => keyA.localeCompare(keyB));
};

const SideMenu = () => {
  const { pathname } = useRouter();

  return (
    <Wrapper>
      <Flex col gap={8}>
        {MENU_LIST.map((category) => (
          <Flex key={category.key} col gap={4}>
            <CategoryName>{category.label}</CategoryName>
            <Flex col gap={2}>
              {sortList(category.list).map(({ key, label, createdAt }) => (
                <List
                  key={key}
                  href={`/docs/${category.key}/${key}`}
                  style={{
                    color: pathname.includes(key)
                      ? 'var(--neutral900)'
                      : 'var(--neutral500)',
                    pointerEvents: createdAt ? 'auto' : 'none',
                  }}
                >
                  {label}
                  {(() => {
                    if (category.key !== 'components') {
                      return null;
                    }
                    if (!createdAt) {
                      return <PreparingChip>Preparing</PreparingChip>;
                    }
                    if (isNewComponent(createdAt)) {
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
  ${tw`flex items-center gap-1 text-base px-2 py-1 rounded-md transition-colors duration-300`};
  ${tw`hover:(text-neutral-900 bg-neutral-100)`};
`;
const PreparingChip = styled(Chip)`
  ${tw`!h-5 !text-xs text-white !bg-neutral-300 !px-2`};
`;
const NewChip = styled(Chip)`
  ${tw`!h-5 !text-xs text-white !bg-blue-500 !px-2`};
`;
