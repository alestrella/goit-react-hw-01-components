import styled from 'styled-components';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Heading = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  border: 1px solid ${p => p.theme.colors.border};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  background-color: ${p => p.generatedColor};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
`;
