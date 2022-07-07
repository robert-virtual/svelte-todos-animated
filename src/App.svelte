<script lang="ts">
  import { Link, Route, Router } from "svelte-navigator";
  import Inicio from "./lib/inicio.svelte";
  import Todos from "./lib/todos.svelte";
</script>

<Router>
  <nav>
    <Link to="/">inicio</Link>
    <Link to="todos">todos</Link>
  </nav>
  <main>
    <Route path="/">
      <Inicio />
    </Route>
    <Route path="/todos">
      <Todos />
    </Route>
  </main>
</Router>
