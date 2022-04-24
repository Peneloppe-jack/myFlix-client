import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onRegistrationView(username);
  };

  return (
   <> <form>

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

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>

<div><br />
<span>To create an account </span><br />
<button type="submit">Register Here !</button> 
</div></>
  
  );
}

LoginView.propTypes = {
    user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired
};