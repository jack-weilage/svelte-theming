<h1 align="center"><pre>svelte-theming</pre></h1>

## Installation

Install with `npm`, `pnpm`, `yarn` etc.
```bash
npm install svelte-theming
```

## Example
```html
<script>
    // Import the element.
    import Theming from 'svelte-theming'
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
    let current = 'light'

    const swap_theme = () => {
        const keys = Object.keys(theme)
        // Move to the next theme, wrapping back around.
        current = keys[(keys.indexOf(current) + 1) % keys.length]
    }
</script>
<!-- Pass the current theme to the element. -->
<Theming theme={theme[current]} />

<button type="button" on:click={swap_theme}>Swap theme</button>

<p>This text is in {current} theme!</p>
```