import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
