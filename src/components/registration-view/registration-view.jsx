//cf Creating User /Registering
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//import './login-view.scss';

export function RegisterView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birhday);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onRegistration(username);
    };

return (
<form>
    <label>
      Username:
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </label>
  
    <label>
      Password:
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </label>
    
    <label> 
      Email:
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    </label>
</form>
);
};

RegistrationView.propTypes = {
  register: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
  }),
  onRegistration: PropTypes.func,
};