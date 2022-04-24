
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
RegistrationView.propTypes = {
    RegistrationView: PropTypes.shape({
            Username: PropTypes.string.isRequired,
            Password: PropTypes.string.isRequired,
            Email: PropTypes.string.isRequired
        }).isRequired,
        onRegistration: PropTypes.func.isRequired
      };
    };