import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  Button from '../button/button';

//import Button from 'react-bootstrap/Button';
//import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const { Button } = '../components/button/button';
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onRegistration(username);
};

return (
  <div>
    <form>

      <label>
        Username:
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Birthday:
        <input
        type="Date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <Button label ="super-button"  variant="primary" type="submit" onClick={handleSubmit}>
        Register !
      </Button>
    
    </form>
  </div>

);}


RegistrationView.propTypes = {
  onRegistration: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired
  }).isRequired,
  onRegistration: PropTypes.func.isRequired
};