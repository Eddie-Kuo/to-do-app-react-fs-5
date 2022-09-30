import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { createTodo } from '../../services/todo';
import { useTodo } from '../hooks/useTodo';
import './Todo.css';


export default function Todo() {
  const { todo } = useTodo();

  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleAdd = async () => {
    await createTodo(description);
  };

  return (
    <>
      <div className='todo-form'>
        <input type="text" value={description} 
          placeholder="Enter your task"
          onChange={(e) => setDescription(e.target.value)}></input>
        <button onClick={handleAdd} >Add</button>
      </div>
      <div className='container'>
        <h3>My To Do List:</h3>
        <div className='todo'>
          <p>Task 1</p>
          <p>Task 2</p>
          <p>Task 3</p>
          {/* todo.map to render a new element every time a new todo is added to the array */}
        </div>
      </div>
    </>
  );
}
