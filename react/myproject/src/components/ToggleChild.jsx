import PropTypes from 'prop-types';

const ToggleChild = ({ isToggled }) => {
  return (
    <div>
      <p>The switch is {isToggled ? 'ON' : 'OFF'}</p>
    </div>
  );
};

ToggleChild.propTypes = {
  isToggled: PropTypes.bool.isRequired,
};

export default ToggleChild;
