<script lang="ts">
    // Import the element.
    import Theming from '$lib/components/Theming.svelte'
    // Create theme objects.
    const theme = {
        light: {
            color: {
                background: 'white',
                text: 'black'
            }
        },
        dark: {
            color: {
                background: 'black',
                text: 'white'
            }
        }
    }
    let current: keyof typeof theme = 'light'
    
    const swap_theme = () => {
        const keys = Object.keys(theme)
        current = keys[(keys.indexOf(current) + 1) % keys.length] as keyof typeof theme
    }
</script>
<!-- Pass the current theme to the element -->
<Theming theme={theme[current]} />

<button type="button" on:click={swap_theme}>Swap theme</button>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<style>
    :global(body) {
        background-color: var(--color-background);
        color: var(--color-text);
    }
</style>