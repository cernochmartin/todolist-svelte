<script lang="ts">
    import { addTask } from "../api";
    let title = "";
    let description = "";

    async function handleSubmit() {
        await addTask({ title, description, status: "todo" });
    }
</script>

<form
    on:submit|preventDefault={handleSubmit}
    class="p-4 bg-white shadow rounded-lg space-y-4"
>
    <input
        bind:value={title}
        placeholder="Title"
        class="w-full p-2 border rounded"
    />
    <textarea
        bind:value={description}
        placeholder="Description"
        class="w-full p-2 border rounded"
    ></textarea>
    <button type="submit" class="bg-blue-500 text-white p-2 rounded"
        >Add Task</button
    >
</form>
