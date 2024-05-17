import { Chip, Flex } from '@ma9pie/lite-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { DOCS_LIST } from '@/constants';
import useMobileNav from '@/hooks/useMobileNav';
import { isNewComponent, isPreparingComponent } from '@/utils';

const SideNav = () => {
  const { pathname } = useRouter();

  const { closeMobileNav } = useMobileNav();

  return (
    <Wrapper>
      <Flex col gap={16}>
        {DOCS_LIST.map(
          ({ key: categoryKey, label: categoryLabel, list: categoryList }) => (
            <Flex key={categoryKey} col gap={8}>
              <CategoryName>{categoryLabel}</CategoryName>
              <Flex col>
                {categoryList.map(
                  ({
                    key: pageKey,
                    label: pageLabel,
                    createdAt: pageCreatedAt,
                  }) => {
                    const url = `/docs/${categoryKey}/${pageKey}`;
                    const isPreparing = isPreparingComponent(pageCreatedAt);
                    const isNew = isNewComponent(pageCreatedAt);

                    return (
                      <Link
                        key={pageKey}
                        href={url}
                        style={{
                          pointerEvents: isPreparing ? 'none' : 'auto',
                        }}
                      >
                        <List
                          active={pathname.includes(pageKey)}
                          onClick={closeMobileNav}
                        >
                          {pageLabel}
                          {(() => {
                            if (categoryKey !== 'components') {
                              return null;
                            }
                            if (isPreparing) {
                              return (
                                <Badge color="var(--neutral300)">
                                  Preparing
                                </Badge>
                              );
                            }
                            if (isNew) {
                              return <Badge color="var(--blue500)">New</Badge>;
                            }
                          })()}
                        </List>
                      </Link>
                    );
                  }
                )}
              </Flex>
            </Flex>
          )
        )}
      </Flex>
    </Wrapper>
  );
};

export default SideNav;

const Wrapper = styled.div`
  ${tw`min-h-[calc(100vh-64px)] px-4 pb-40`};
`;
const CategoryName = styled.p`
  ${tw`text-xl font-semibold`};
`;
const List = styled.div<{ active: boolean }>`
  ${tw`flex items-center gap-2 text-base px-2 py-2 rounded-md transition-colors duration-200`};
  ${tw`sm:hover:bg-neutral-200`};
  ${({ active }) =>
    active ? tw`text-blue-500 font-medium` : tw`text-neutral-500`};
`;
const Badge = styled(Chip)`
  ${tw`text-white !text-xs !leading-[12px] !h-6`};
`;
