import { writable, type Writable } from 'svelte/store';

export interface Task {
    id: string;
    title: string;
    description?: string;
    due_date?: string;
    photo?: string;
}

export const tasks: Writable<Task[]> = writable([]);

export async function fetchTasks(): Promise<void> {
    const res = await fetch('/api/tasks');
    tasks.set(await res.json());
}

export async function addTask(task: Omit<Task, 'id'>): Promise<void> {
    const res = await fetch('/api/tasks', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(task) 
    });
    fetchTasks();
}

export async function updateTask(id: string, updatedTask: Partial<Task>): Promise<void> {
    await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
    });
    fetchTasks();
}

export async function deleteTask(id: string): Promise<void> {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
}
