import { client } from './client';



export async function getTodos() {
  const response = await client.from('todos').select('*');
  return response.data;
}

export async function createTodo(description) {
  return await client.from('todos').insert({ description }).single();
}

export async function completeTodo(todo) {
  return await client.from('todos')
    .update({ complete: true })
    .match({ id : todo.id })
    .single();
}

export async function deleteTodos() {
  return await client.from('todos').delete('*')
    .match({ complete: true });
}