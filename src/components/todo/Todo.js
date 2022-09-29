import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Todo.css';


export default function Todo() {

  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className='todo'>
      <h3>My To Do List:</h3>
      <div className='todo-form'>
        <input></input>
        <button>Add</button>
      </div>
      <div className='container'>
        <p>Task 1</p>
        <p>Task 2</p>
        <p>Task 3</p>
      </div>
    </div>
  );
}
