import { useEffect, useState } from 'react';
import { getTodos } from '../../services/todo';

export function useTodo() {
// set state
  const [todo, setTodo] = useState([]);
// use effect to fetch the data 
// set the state with data 
  useEffect(() => {

    const loadData = async () => {
      const data = await getTodos();
      setTodo(data);
    };
    loadData();
  }, []);

  return { todo, setTodo };
}