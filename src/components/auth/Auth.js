import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
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
    // set user
    setUser(userResponse);
    // reset inputs
    setEmail('');
    setPassword('');
  };
    //redirect the user to correct page
  if (user) {
    return <Redirect to="/tasks" />;
  }

  return (
    <div className='auth'>


      <div className="tabs">
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        {/* these need to be nav links  */}
        <NavLink to="/auth/sign-out">Sign Out</NavLink>
      </div>

      <div className='form'>
        <div className='form-controls'>
          <label>
            Email:
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
        </div>
        <div className='form-controls'>
          <label>
            Password:
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
        </div>
        <button onClick={clickHandler}>Submit</button>
      </div>
    </div>
  );
}
