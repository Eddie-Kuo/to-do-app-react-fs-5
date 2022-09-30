import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { createTodo, getTodos } from '../../services/todo';
import './Todo.css';


export default function Todo() {

  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleAdd = async () => {
    // on click this function needs to run to send info to supabase 
    await createTodo(description);
    // const newTodo = {
    //   description: { todo },
    //   complete: false
    // };
    // createTodo(newTodo);
    const list = getTodos();
    console.log(list);
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
        </div>
      </div>
    </>
  );
}
