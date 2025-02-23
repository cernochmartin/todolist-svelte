<script lang="ts">
    import { tasks } from "../api";
    import TaskItem from "./TaskItem.svelte";
</script>

<div class="grid grid-cols-3 gap-4 p-4">
    <div class="bg-gray-100 p-4 rounded">
        <h2 class="text-lg font-semibold">To Do</h2>
        {#each $tasks.filter((task) => task.status === "todo") as task}
            <TaskItem {task} />
        {/each}
    </div>

    <div class="bg-gray-200 p-4 rounded">
        <h2 class="text-lg font-semibold">In Progress</h2>
        {#each $tasks.filter((task) => task.status === "in-progress") as task}
            <TaskItem {task} />
        {/each}
    </div>

    <div class="bg-gray-300 p-4 rounded">
        <h2 class="text-lg font-semibold">Done</h2>
        {#each $tasks.filter((task) => task.status === "done") as task}
            <TaskItem {task} />
        {/each}
    </div>
</div>
