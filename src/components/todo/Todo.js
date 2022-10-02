import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { completeTodo, createTodo, deleteTodos, getTodos } from '../../services/todo';
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
    // createTodo returns an object so on line 20 we can destructure it and only get the data property we want
    setTodos(prevState => [...prevState, data]);
    setDescription('');
  };

  const handleComplete = async (todo) => {
    const { data } = await completeTodo(todo); 
    setTodos(prevState => prevState.map(item => (item.id === data.id ?
      data : item)));
  };
  // function setTodos with a parameter as a callback function 
  // taking the previous state and mapping it out with item as the parameter
  // if the id of the item matches the new object's id thats getting passed in, then show the new item (data) instead, otherwise show the original item

  const handleDelete = async () => {
    await deleteTodos();
    setTodos(await getTodos());
  };

  return (
    <>
      <div className='todo-form'>
        <input type="text" value={description} 
          placeholder="Enter your task"
          onChange={(e) => setDescription(e.target.value)}></input>
        <button onClick={handleAdd} >Add</button>
      </div>
      <button className='delete' onClick={handleDelete}>Delete Completed Todos</button>
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
