import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

const Error = ({ message }) => (
    <div className={`${styles.error} alert position-absolute`} role='alert'>
        {message}
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message:
        'An error occurred, you entered the wrong country or year, please restart the page',
};

export default Error;
