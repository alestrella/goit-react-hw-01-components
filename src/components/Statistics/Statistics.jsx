import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? <h2>{title}</h2> : null}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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
