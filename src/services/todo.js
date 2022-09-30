import { client } from './client';



export async function getTodos() {
  const response = await client.from('todos').select('*');
  console.log(response);
  return response;
}

export async function createTodo(description) {
  return await client.from('todos').insert({ description });
}