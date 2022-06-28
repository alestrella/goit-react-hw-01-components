import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 480px;
  text-align: center;
  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.card};

  & th,
  & td {
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
  }

  & tr:nth-of-type(even) {
    background-color: ${p => p.theme.colors.lightAccent};
  }
  & td:not(:last-child) {
    border-right: 1.5px solid ${p => p.theme.colors.lightGray};
  }
`;

export const TableHead = styled.thead`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  text-transform: uppercase;
`;
