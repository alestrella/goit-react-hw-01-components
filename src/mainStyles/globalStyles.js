import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
}
`;
