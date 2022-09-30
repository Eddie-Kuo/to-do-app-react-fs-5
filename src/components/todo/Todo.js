import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { completeTodo, createTodo } from '../../services/todo';
import { useTodo } from '../hooks/useTodo';
import './Todo.css';


export default function Todo() {
  const { todos, setTodos } = useTodo();
//   console.log(todos);
  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleAdd = async () => {
    const { data } = await createTodo(description);
    setTodos(prevState => [...prevState, data]);
    setDescription('');
  };

  const handleComplete = async (todo) => {
    const { data } = await completeTodo(todo); 
    setTodos(prevState => prevState.map(item => (item.id === data.id ?
      data : item)));
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
            // console.log(todo);
            return <p key={todo.id}>
              <input type="checkbox" checked={todo.complete}
                onClick={() => handleComplete(todo)}/>
              {todo.description}
            </p>;
          }
          )}
        </div>
      </div>
    </>
  );
}

