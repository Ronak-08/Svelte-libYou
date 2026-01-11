<script>
	import './layout.css';
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Button from '$lib/components/Button.svelte';

let isOpen = $state(false);
  const toggleDrawer = () => (isOpen = !isOpen);

	const { children } = $props();
</script>

<main class="flex h-dvh w-full">
    <Sidebar bind:isOpen>
    <header class="flex mb-2 items-center gap-1 shrink-0">
      <input 
        type="text" 
        class="bg-surface-container-highest rounded-full border border-transparent transition focus:border-outline-variant/70 p-2.5 flex-1 min-w-0" 
        placeholder="Search..." 
      />
      <Button variant="text" class="size-9 shrink-0">
        new
      </Button>
    </header>

    <div class="flex-1 flex flex-col min-h-0 overflow-hidden mt-5">
      <div class="flex-1 overflow-y-auto gap-2 flex flex-col pr-1">
        <div><p>Hello</p></div>
        <div><p>Hello</p></div>
        <div><p>Hello</p></div>
        <div><p>Hello</p></div>
        <div><p>Hello</p></div>
        <div><p>Hello</p></div>
      </div>
    </div>

  <div class="shrink-0 mt-3 pt-2 border-t border-outline-variant/30">
    <Button class="size-10" variant="normal">
        setting
    </Button>
  </div>
</Sidebar>

  <Button onclick={toggleDrawer}>Open</Button>

{@render children()}
</main>
