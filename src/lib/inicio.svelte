<script lang="ts">
  import { tweened, spring } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  const coords = spring({ x: 50, y: 50 });
  const size = spring(10);
  let visible = true;
  let visible2 = true;
  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
</script>

  <progress value={$progress} />
  <br />
  {#each [0, 25, 50, 75, 100] as e}
    <button on:click={() => progress.set(e / 100)}>{e}%</button>
  {/each}
  <br />
  <hr />
  <input type="checkbox" bind:checked={visible} />
  {#if visible}
    <p transition:fly={{ x: 200, duration: 1000 }}>
      este texto esta animado con fly
    </p>
  {/if}
  <hr />
  <input type="checkbox" bind:checked={visible2} />
  {#if visible2}
    <p transition:fade>este texto esta animado fade</p>
  {/if}
  <svg on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}>
    <circle cx={$coords.x} cy={$coords.y} r={$size} />
  </svg>

<style>
  svg {
    width: 100vw;
    height: 100vh;
    border: solid gray 1px;
  }
  circle {
    fill: orange;
  }
</style>
