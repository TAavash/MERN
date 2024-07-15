import PropTypes from 'prop-types';

const MessageChild = ({ message }) => {
  return (
    <div>
      <p>Current message: {message}</p>
    </div>
  );
};

MessageChild.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageChild;
