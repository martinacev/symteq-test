import PropTypes from 'prop-types';
import './Cta-button.css';

const Button = ({ label, onClick, styleType = 'primary', size = 'medium', disabled = false }) => {
    const classNames = `btn btn--${styleType} btn--${size}`;

    return (
        <button className={classNames} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};


Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    styleType: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    styleType: 'primary',
    size: 'medium',
    disabled: false,
};

export default Button;