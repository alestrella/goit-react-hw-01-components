import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.space[5]}px;
  text-transform: capitalize;
`;
