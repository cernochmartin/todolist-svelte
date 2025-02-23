<script lang="ts">
    import TaskItem from "./TaskItem.svelte";
    import { tasks } from "../lib/api";
</script>

<div class="space-y-4">
    {#each $tasks as task}
        <TaskItem {task} />
    {/each}
</div>
