<script lang="ts">
  import type { ITodo } from "src/types";
  import type { CrossfadeParams, TransitionConfig } from "svelte/transition";

  export let todo: ITodo;
  export let keyobj: { key: any };
  export let receive: (
    node: Element,
    params: CrossfadeParams & { key: any }
  ) => () => TransitionConfig;
  export let send: (
    node: Element,
    params: CrossfadeParams & { key: any }
  ) => () => TransitionConfig;
</script>

<li in:receive={keyobj} out:send={keyobj}>
  <label>
    <input type="checkbox" bind:checked={todo.done} />
    {todo.text}
  </label>
  <svg
    style="width: 1rem;"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
</li>

<style>
  li {
    display: flex;
    width: 25vw;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 3px gray;
    margin: 0.5rem;
  }
  svg {
    opacity: 0;
    transition: all 0.5s;
  }
  li:hover {
    box-shadow: 0 0 6px gray;
  }
  li:hover > svg {
    opacity: 1;
  }
  svg:hover {
    color: red;
  }
</style>
