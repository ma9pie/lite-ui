import { Chip, Flex } from '@ma9pie/lite-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { DOCS_LIST } from '@/constants';
import useMobileNav from '@/hooks/useMobileNav';
import { isNewComponent } from '@/utils';

const SideNav = () => {
  const { pathname } = useRouter();

  const { closeMobileNav } = useMobileNav();

  return (
    <Wrapper>
      <Flex col gap={16}>
        {DOCS_LIST.map((category) => (
          <Flex key={category.key} col gap={8}>
            <CategoryName>{category.label}</CategoryName>
            <Flex col>
              {category.list.map(({ key, label, createdAt }) => (
                <Link
                  key={key}
                  href={`/docs/${category.key}/${key}`}
                  style={{
                    pointerEvents: createdAt ? 'auto' : 'none',
                  }}
                >
                  <List
                    active={pathname.includes(key)}
                    onClick={closeMobileNav}
                  >
                    {label}
                    {(() => {
                      if (category.key !== 'components') {
                        return null;
                      }
                      if (!createdAt) {
                        return (
                          <Badge color="var(--neutral300)">Preparing</Badge>
                        );
                      }
                      if (isNewComponent(createdAt)) {
                        return <Badge color="var(--blue500)">New</Badge>;
                      }
                    })()}
                  </List>
                </Link>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default SideNav;

const Wrapper = styled.div`
  ${tw`p-4 min-h-[calc(100vh-64px)]`};
`;
const CategoryName = styled.p`
  ${tw`text-xl font-semibold`};
`;
const List = styled.div<{ active: boolean }>`
  ${tw`flex items-center gap-2 text-base px-2 py-2 rounded-md transition-colors duration-200`};
  ${tw`hover:bg-neutral-100`};
  ${({ active }) =>
    active ? tw`text-neutral-900 font-medium` : tw`text-neutral-500`};
`;
const Badge = styled(Chip)`
  ${tw`text-white !text-xs !leading-[12px] !h-6`};
`;
