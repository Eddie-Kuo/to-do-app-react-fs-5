import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  // passing in user state with context

  const handleClick = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <header className='header'>
      <h2>Alchemy To Do List</h2>
      {user && (
        <>
          <div>Hello, {user.email}</div>
          <button onClick={handleClick} >Logout</button>
        </>
      )}
      {/* This will only show if the user is logged in */}
    </header>
  );
}
