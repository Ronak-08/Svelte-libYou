<script>
let {children, isOpen = false} = $props();
</script>

{#if isOpen}
  <div onclick={() => isOpen = !isOpen} role="button" tabindex="-1" onkeyup={() => {}} class="fixed inset-0 backdrop-blur-sm bg-scrim/60 md:hidden"></div>
{/if}

<aside class="fixed min-w-40 top-0 left-0 z-50 h-screen transition-all bg-surface-container border-r border-r-outline-variant {isOpen ? 'trasnlate-x-0' : '-translate-x-full'} md:translate-x-0 md:static">
  <div class="flex flex-col h-full p-4">
    {@render children()}
  </div> 
</aside>
