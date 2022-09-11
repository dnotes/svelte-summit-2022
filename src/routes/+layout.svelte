<script lang="ts">
  import "../app.css";
</script>

<svelte:head>
  <title>Images from Svelte Summit 2022</title>
  <meta name="description" content="Some 360° images from the Svelte Summit, September 8-9 2022, Stockholm"/>
</svelte:head>

<div class="w-screen h-screen flex flex-col">
  <div class="flex-grow flex items-center justify-center">
    <slot></slot>
  </div>
</div>
