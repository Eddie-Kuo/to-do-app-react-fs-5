import { useState, useContext } from 'react';
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { authUser } from '../../services/auth';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  const clickHandler = async () => {
    // call auth user with state
    const userResponse = await authUser(email, password, type);
    console.log(userResponse);
    // set user
    setUser(userResponse);
    // reset inputs
    setEmail('');
    setPassword('');
  };

    //redirect the user to correct page
  if (user) {
    return <Redirect to="/todo" />;
  }

  return (
    <div className='auth'>

      <div className="tabs">
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        {/* these need to be nav links  */}
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>

      <div className='form'>
        <div className='form-controls'>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-controls'>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={clickHandler}>Submit</button>
      </div>
    </div>
  );
}
