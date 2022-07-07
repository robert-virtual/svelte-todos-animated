<script lang="ts">
  import type { ITodo } from "src/types";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import Todo from "./todo.svelte";

  let todos: ITodo[] = [];
  let todoText = "";
  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),
    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform == "none" ? "" : style.transform;
      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
          transform:${transform} scale(${t});
          opacity:${t};
        `,
      };
    },
  });
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
          <Todo {receive} keyobj={{ key: i.toString() }} {send} bind:todo={e} />
        {/if}
      {/each}
    </ul>
  </div>
  <div>
    <h2>Done</h2>
    <ul>
      {#each todos as e, i (i.toString())}
        {#if e.done}
          <Todo {receive} keyobj={{ key: i.toString() }} {send} bind:todo={e} />
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
