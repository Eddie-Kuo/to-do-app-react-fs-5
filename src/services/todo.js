import { client } from './client';



export async function getTodos() {
  const response = await client.from('todos').select('*');
  return response.data;
}

export async function createTodo(description) {
  return await client.from('todos').insert({ description });
}