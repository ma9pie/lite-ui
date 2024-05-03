import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';

interface TableFieldItem {
  key: string;
  value: string;
}

interface TableRowItem {
  [property: string]: any;
}

interface Props {
  className?: string;
  field: TableFieldItem[];
  rows: TableRowItem[];
}

const Table = ({ className, field, rows }: Props) => {
  const attrs = useMemo(() => field.map(({ key }) => key), [field]);

  return (
    <Wrapper className={className}>
      <TableHead>
        <TableRow>
          {field.map(({ key, value }) => (
            <HeadCell key={key}>{value}</HeadCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({ key, ...props }) => (
          <TableRow key={key}>
            {attrs.map((attr) => (
              <BodyCell key={attr}>{props[attr] || '-'}</BodyCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.table`
  ${tw`w-full border-separate`};

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
