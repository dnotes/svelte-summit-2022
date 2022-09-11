<script lang="ts">
import { Viewer, type ViewerOptions } from 'photo-sphere-viewer'
import { onMount } from 'svelte';

export let src:string
export let width:string = "100%"
export let height:string = "100%"
let cls:string|undefined = undefined
export {cls as class}

let el:HTMLElement
export let viewer:Viewer|undefined = undefined

export let options:Omit<ViewerOptions,"container"|"panorama"> = {}

$: if (src && viewer) {
  viewer.setPanorama(src, {
    showLoader: false
  })
  viewer.animate({
    latitude: options?.defaultLat ?? 0,
    longitude: options?.defaultLong ?? 0,
    zoom: options?.defaultZoomLvl ?? undefined,
    speed: "20rpm",
  })
  viewer.setOptions(options)
}

onMount(() => {
  viewer = new Viewer({ ...options, panorama:src, container:el })
  return () => {
    if (viewer) viewer.destroy()
  }
})

</script>

<div class="photosphere {cls}" style:width style:height bind:this={el} />

<style>
  @import "../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";
</style>