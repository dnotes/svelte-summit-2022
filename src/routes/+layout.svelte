<script lang="ts">
  import "../app.css";
</script>

<svelte:head>
  <title>Svelte Summit - September 2022, Stockholm</title>
</svelte:head>

<div class="w-screen h-screen flex flex-col">
  <div class="flex-grow flex items-center justify-center">
    <slot></slot>
  </div>
</div>
