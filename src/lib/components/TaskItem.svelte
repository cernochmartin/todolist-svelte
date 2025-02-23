<script lang="ts">
    import type { Task } from "../api";
    export let task: Task;
</script>

<div class="p-4 bg-white shadow rounded-lg">
    <h3 class="text-lg font-semibold">{task.title}</h3>
    <p class="text-sm text-gray-600">{task.description}</p>
</div>
