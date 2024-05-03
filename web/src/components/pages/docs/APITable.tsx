import React from 'react';
import tw, { styled } from 'twin.macro';

import { APITableRowItem } from '@/types';

interface Props {
  className?: string;
  rows: APITableRowItem[];
}

const APITable = ({ className, rows }: Props) => {
  return (
    <Wrapper className={className}>
      <TableHead>
        <TableRow>
          <HeadCell>Property</HeadCell>
          <HeadCell>Type</HeadCell>
          <HeadCell>Description</HeadCell>
          <HeadCell>Default</HeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map(({ property, type, description, defaultValue }, idx) => (
          <TableRow key={idx}>
            <BodyCell>{property}</BodyCell>
            <BodyCell>{type?.join(' | ')}</BodyCell>
            <BodyCell>{description}</BodyCell>
            <BodyCell>{JSON.stringify(defaultValue) || '-'}</BodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Wrapper>
  );
};

export default APITable;

const Wrapper = styled.table`
  ${tw`w-full min-w-[600px] border-separate`};

  th,
  td {
    ${tw`flex-[3] flex justify-start items-center`};
    &:first-of-type {
      ${tw`flex-[2]`};
    }
    &:last-of-type {
      ${tw`flex-[2]`};
    }
  }

  th {
    ${tw`bg-neutral-200`};
    &:first-of-type {
      ${tw`rounded-l-xl`};
    }
    &:last-of-type {
      ${tw`rounded-r-xl`};
    }
  }
`;
const TableHead = styled.thead`
  ${tw`font-medium`};
`;
const TableBody = styled.tbody`
  ${tw``};
`;
const TableRow = styled.tr`
  ${tw`flex min-h-10`};
`;
const HeadCell = styled.th`
  ${tw`px-4`};
`;
const BodyCell = styled.td`
  ${tw`px-4`};
`;
