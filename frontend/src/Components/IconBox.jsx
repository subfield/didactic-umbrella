import PropTypes from 'prop-types';

const IconBox = ({ icon, label, className = '', iconClassName = '' }) => {
  return (
    <div className={`${className}`}>
      <img src={icon} alt={`${label} icon`} className={`h-4 w-4 ${iconClassName}`} />
      <span className="text-sm">{label}</span>
    </div>
  );
};

// Prop validation
IconBox.propTypes = {
  icon: PropTypes.string.isRequired, // Ensure the icon is a required string
  label: PropTypes.string.isRequired, // Ensure the label is a required string
  className: PropTypes.string,        // Optional string for container class
  iconClassName: PropTypes.string,    // Optional string for icon class
};

export default IconBox;
