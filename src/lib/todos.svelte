<script lang="ts">
  import type { ITodo } from "src/types";
  import Todo from "./todo.svelte";

  let todos: ITodo[] = [];
  let todoText = "";
  $: {
    console.log(todos);
  }
  function add() {
    if (todoText) {
      todos = [...todos, { text: todoText, done: false }];
    }
    todoText = "";
  }
</script>

<h1>Todos</h1>

<input
  type="text"
  placeholder="nueva todo"
  bind:value={todoText}
  on:keyup={(e) => {
    if (e.key == "Enter") {
      console.log("add");
      add();
    }
  }}
/>

<div class="row">
  <div>
    <h2>Todo</h2>
    <ul>
      {#each todos as e, i (i.toString())}
        {#if !e.done}
          <Todo bind:todo={e} />
        {/if}
      {/each}
    </ul>
  </div>
  <div>
    <h2>Done</h2>
    <ul>
      {#each todos as e, i (i.toString())}
        {#if e.done}
          <Todo bind:todo={e} />
        {/if}
      {/each}
    </ul>
  </div>
</div>

<style>
  .row {
    display: flex;
    flex-direction: row;
  }
</style>
