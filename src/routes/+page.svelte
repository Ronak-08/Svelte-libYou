<script>
import Button from "$lib/components/Button.svelte";
import ButtonGroup from "$lib/components/ButtonGroup.svelte";
import Loader from "$lib/components/Loader.svelte";
import Textfield from "$lib/components/Textfield.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";

function hello() {
  console.log("hello") 
}


  let viewMode = $state([]);
  
const tabs = [
  { id: 'list', label: 'List View' },
  { id: 'board', label: 'Board View' }
];
let isOpen = $state(false);
  const toggleDrawer = () => (isOpen = !isOpen);
</script>


<Sidebar {isOpen}>
  <div class="flex justify-between m-2">
    <p class="text-2xl">Sidebar</p>
    <Button class="md:hidden" onclick={toggleDrawer}>Close</Button>
  </div>
</Sidebar>

<main class="p-3">
  <h1 class="text-3xl w-full text-center font-bold mb-3">Welcome</h1>
  <span class="p-2 opacity-70">Buttons</span>
  <div class="flex p-1 m-3 flex-wrap gap-2">
    <Button>Filled</Button>
    <Button onclick={toggleDrawer} variant="normal">Normal</Button>
    <Button variant="tonal">tonal</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="text">Text</Button>
  </div>

  <div class="flex p-1 flex-col">
    <span class="opacity-70 p-2">Button Group</span>
<ButtonGroup items={tabs} bind:selected={viewMode} />

<!-- Access data -->
<p>Current View: {viewMode[0]?.label}</p>
  </div>

  <div class="flex p-2 flex-col">
    <span>Loaders</span>
    <Loader />
  </div>

 <Textfield placeholder="Type your text.." type="text" /> 

</main>

