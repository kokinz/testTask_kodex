import PropTypes from 'prop-types';

const stringPropType = PropTypes.shape({
  value: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
});

export {stringPropType};
