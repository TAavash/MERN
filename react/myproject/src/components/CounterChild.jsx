import PropTypes from 'prop-types';

const CounterChild = ({ count }) => {
  return (
    <div>
      <p>Current count: {count}</p>
    </div>
  );
};

CounterChild.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CounterChild;