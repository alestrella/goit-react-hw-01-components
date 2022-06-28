import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  text-transform: capitalize;
`;
