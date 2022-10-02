import { useEffect, useState } from 'react';
import { getTodos } from '../../services/todo';

export function useTodo() {
// set state
  const [todos, setTodos] = useState([]);
// use effect to fetch the data 
// set the state with data 
  useEffect(() => {

    const loadData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    loadData();
  }, []);

  return { todos, setTodos };
}

// useEffect - escape hatch - job is to do everyhting on the side that the component doesnt already do - used as a result of the component being rendered 