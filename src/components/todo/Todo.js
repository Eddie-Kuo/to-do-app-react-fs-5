import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Todo.css';


export default function Todo() {

  const [todo, setTodo] = useState('');
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleClick = async () => {
    // on click this function needs to run to send info to supabase 
    // will also need to retrieve data to map out list of todos
    // each todo will have a handlecomplete feature to mark as completed
  };

  return (
    <>
      <div className='todo-form'>
        <input value={todo} 
          placeholder="Enter your task"
          onChange={(e) => setTodo(e.target.value)}></input>
        <button onClick={handleClick} >Add</button>
      </div>
      <div className='container'>
        <h3>My To Do List:</h3>
        <div className='todo'>
          <p>Task 1</p>
          <p>Task 2</p>
          <p>Task 3</p>
        </div>
      </div>
    </>
  );
}
