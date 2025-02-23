<script lang="ts">
    import TaskList from "$lib/components/TaskList.svelte";
    import TaskForm from "$lib/components/TaskForm.svelte";
    import KanbanBoard from "$lib/components/KanbanBoard.svelte";
</script>

<div class="max-w-3xl mx-auto p-6 space-y-6">
    <h1 class="text-2xl font-bold">Todo List</h1>
    <TaskForm />
    <TaskList />
    <KanbanBoard />
</div>
