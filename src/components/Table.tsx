import styled from '@emotion/styled';
import React from 'react';

import { TableProps } from '@/types';

const Table = ({ className, field, rows, minWidth }: TableProps) => {
  if (!field || !rows) {
    return null;
  }

  return (
    <Wrapper className={className} style={{ minWidth }}>
      <TableHead>
        <TableRow>
          {field.map(({ key, value, flex, align }) => (
            <HeadCell key={key} style={{ flex: flex, justifyContent: align }}>
              <Content>{value}</Content>
            </HeadCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map(({ key, ...props }) => (
          <TableRow key={key}>
            {field.map(({ key, flex, align, render = () => null }) => (
              <BodyCell key={key} style={{ flex: flex, justifyContent: align }}>
                <Content>{render(props) || props[key]}</Content>
              </BodyCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.table`
  width: 100%;
  border-style: separate;

  th,
  td {
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  th {
    background-color: var(--neutral200);
    &:first-of-type {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
    &:last-of-type {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;
const TableHead = styled.thead`
  font-weight: 500;
`;
const TableBody = styled.tbody``;
const TableRow = styled.tr`
  display: flex;
  min-height: 40px;
`;
const HeadCell = styled.th``;
const BodyCell = styled.td``;
const Content = styled.div`
  padding: 0px 16px;
`;
