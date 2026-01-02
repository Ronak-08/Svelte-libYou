<script>
	import './layout.css';
  import Sidebar from "$lib/components/Sidebar.svelte";

let isOpen = $state(false); // Mobile drawer state
  const toggleDrawer = () => (isOpen = !isOpen);

	const { children } = $props();
</script>

<main class="flex">
{@render children()}
</main>
<button onclick={toggleDrawer}>h</button>
