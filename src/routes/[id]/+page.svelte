<script lang="ts">
// @ts-ignore Why is this not recognized?
import content from "$lib/content.yml"
import { page } from '$app/stores'

import PhotoSphere from '$lib/PhotoSphere.svelte'
import { goto } from "$app/navigation";

$: idx = content.findIndex((item:any) => (item?.id == $page.params.id))
$: img = content[idx] || false
$: hasNext = idx < content.length - 1
$: hasPrev = idx > 0

</script>

{#if idx !== -1}
  <PhotoSphere
    src="/images/{img.id}.jpg"
    options={{
      navbar: [
        "autorotate",
        "zoom",
        "fullscreen",
        "download",
        {
          id: 'home',
          content: 'home',
          title: 'Back to the front page',
          onClick: () => {
            goto("/")
          },
        },
        {
          id: 'prev',
          content: 'prev',
          title: 'Previous picture',
          onClick: () => {
            if (hasPrev) {
              goto(`/${content[idx-1].id}`)
            }
          },
        },
        {
          id: 'next',
          content: 'next',
          title: 'Next picture',
          onClick: () => {
            if (hasNext) {
              goto(`/${content[idx+1].id}`)
            }
          },
        },
      ],
      defaultLat: img?.latitude || 0,
      defaultLong: img?.longitude || 0,
      defaultZoomLvl: img?.zoom || 0,
      fisheye: img?.fisheye ?? 1,
    }}
  />
{/if}