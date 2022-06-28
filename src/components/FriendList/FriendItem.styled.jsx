import styled from 'styled-components';

export const Item = styled.li`
  width: 320px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.none};
  box-shadow: ${p => p.theme.shadows.card};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const FriendAvatar = styled.img`
  padding: ${p => p.theme.space[2]}px;
  border: 1px dashed ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
`;

export const FriendStatus = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const FriendName = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
