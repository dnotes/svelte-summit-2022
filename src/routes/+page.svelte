<script lang="ts">
  // @ts-ignore tell me why
  import content from '$lib/content.yml'
  const alt = 'Participants at the Svelte Summit in Stockholm, September 8-9, 2022'
</script>

<div class="prose dark:prose-invert mx-auto px-5">

  <h1 class="text-center font-bold mt-11 mb-0 text-4xl">Svelte Summit 2022</h1>
  <h3 class="text-center italic mt-0 mb-7">Stockholm &middot; September 8-9</h3>

  <p class="text-xl">
    These are some 360° photosphere images from Svelte Summit 2022 in Stockholm.
    Thanks to the conference organizers and all the participants for helping to
    create such a spirit of comeradship and community.
  </p>

  <h2 class="font-bold mt-6 mb-2 text-3xl">Conference</h2>
  <div class="flex flex-wrap gap-4">
    {#each content as img}
      {#if img.section === 'conference'}
        <a href="/{img.id}" class="not-prose block border-4 border-black w-48 h-24">
          <img src="/images/{img.id}_screen.jpg" alt="{img.caption || alt}">
        </a>
      {/if}
    {/each}
  </div>

  <h2 class="font-bold mt-6 mb-2 text-3xl">After Party</h2>
  <div class="flex flex-wrap gap-4">
    {#each content as img}
      {#if img.section === 'party'}
        <a href="/{img.id}" class="not-prose block border-4 border-black w-48 h-24">
          <img src="/images/{img.id}_screen.jpg" alt="{img.caption || alt}">
        </a>
      {/if}
    {/each}
  </div>

  <p>
    These images were taken on an Insta360 One X2. If you are thinking of getting one,
    maybe you'd like to use <a href="https://amzn.to/3d7g7eU">my Amazon affiliate link</a>. <span class="text-sm"><span class="italic">&larr; monetization.</span> 😎</span>
  </p>

  <p>
    I believe I obtained permission to photograph everyone in these images; nonetheless,
    if anyone wants their image removed, I intend to respect any such requests.
  </p>

</div>
