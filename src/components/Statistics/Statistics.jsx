import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import {
  StatList,
  StatItem,
  Label,
  Percentage,
  Heading,
} from './Statistics.styled';
import { getRandomHexColor } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box minWidth="320px" borderRadius={4} overflow="hidden" as="section">
      {title && <Heading>{title}</Heading>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} generatedColor={getRandomHexColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
