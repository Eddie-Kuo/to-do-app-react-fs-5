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

  return { todos };
}