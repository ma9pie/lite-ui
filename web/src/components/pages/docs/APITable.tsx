import React from 'react';
import tw, { styled } from 'twin.macro';

import { APITableRowItem } from '@/types';
import { firstToUpper } from '@/utils';

interface Props {
  className?: string;
  rows: APITableRowItem[];
}

type Field = 'property' | 'type' | 'description' | 'default';
const FIELD: Field[] = ['property', 'type', 'description', 'default'];

const APITable = ({ className, rows }: Props) => {
  return (
    <Wrapper className={className}>
      <TableHead>
        <TableRow>
          {FIELD.map((field) => (
            <HeadCell key={field}>{firstToUpper(field)}</HeadCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((props, idx) => (
          <TableRow key={idx}>
            {FIELD.map((field) => (
              <BodyCell key={field}>{props[field] || '-'}</BodyCell>
            ))}
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
    ${tw`flex-1 flex justify-start items-center`};
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
