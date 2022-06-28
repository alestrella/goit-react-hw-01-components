import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 320px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.card};
  overflow: hidden;
`;

export const Avatar = styled.img`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.round};
`;

export const ProfileName = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ProfileContact = styled.p`
  color: ${p => p.theme.colors.textSecondary};
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.primary};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[2]}px;
  border-top: 1px solid ${p => p.theme.colors.border};

  & + & {
    border-left: 1px solid ${p => p.theme.colors.border};
  }
`;

export const ItemLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.textSecondary};
`;

export const ItemQuantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
