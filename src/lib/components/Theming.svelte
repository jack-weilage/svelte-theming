<script lang="ts">
    import type { RecursiveObject } from '../utils'
    import { create_stylesheet, hash } from '../utils'
    
    /** The default theme (lower priority than the inputted theme). */
    export let base: RecursiveObject<string | number> = {}
    /** The theme to use. */
    export let theme: RecursiveObject<string | number>

    $: stylesheet = create_stylesheet({ ...base, ...theme })
</script>

<svelte:head>
    <style id="theme-{hash(stylesheet)}" bind:innerHTML={stylesheet} contenteditable />
</svelte:head>