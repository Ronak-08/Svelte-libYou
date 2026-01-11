<script>
import { fly } from "svelte/transition";

let {children, isOpen = $bindable(false), class: className} = $props();
</script>

{#if isOpen }
  <div onclick={() => isOpen = false} role="button" tabindex="-1" onkeyup={() => {}} class="fixed z-100 inset-0 transition-opacity backdrop-blur-sm bg-scrim/60 md:hidden"></div>
{/if}

<aside transition:fly={{x: -100, duration: 200}} class="fixed w-[clamp(16rem,70vw,20rem)] md:w-64 lg:w-80 top-0 left-0 z-101 h-dvh transition-transform ease-in-out duration-200 bg-surface-container border-r border-r-outline-variant/70 {isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static {className}">
  <div class="flex flex-col h-full p-4 min-h-0">
    {@render children()}
  </div> 
</aside>
