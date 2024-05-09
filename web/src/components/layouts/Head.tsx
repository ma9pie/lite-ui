import { NextSeo } from 'next-seo';
import React, { useMemo } from 'react';

import { SITE_DESCRIPTION, SITE_TITLE } from '@/constants';

interface Props {
  page?: string;
  description?: string;
}

const HeadComponent = ({ page, description = SITE_DESCRIPTION }: Props) => {
  const title = useMemo(
    () => `${SITE_TITLE}${page ? ` | ${page}` : ''}`,
    [page]
  );

  return <NextSeo title={title} description={description}></NextSeo>;
};

export default HeadComponent;
