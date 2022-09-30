import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { createTodo } from '../../services/todo';
import { useTodo } from '../hooks/useTodo';
import './Todo.css';


export default function Todo() {
  const { todos } = useTodo();

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
          {todos.map((todo) => {
            return <p key={todo.id}>{todo.description}</p>;
          }
          )}
        </div>
      </div>
    </>
  );
}
