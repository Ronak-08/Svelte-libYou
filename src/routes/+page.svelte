<script>
import Button from "$lib/components/Button.svelte";
import ButtonGroup from "$lib/components/ButtonGroup.svelte";
import Loader from "$lib/components/Loader.svelte";
import Textfield from "$lib/components/Textfield.svelte";

function hello() {
  console.log("hello") 
}

let headerButton = [
  {label: "New", action: () => hello(), style: "bg-primary px-3 text-on-primary"},
  {label: "Hello", action: () => hello(), style: "bg-secondary text-on-secondary transition hover:bg-error-container hover:text-on-error-container"},
  {label: "Hello", action: () => hello(), style: "border transition-all duration-300 border-outline-variant/80 hover:bg-error-container hover:text-on-error-container"},
]
</script>

<main class="p-3">
  <h1 class="text-3xl w-full text-center font-bold mb-3">Welcome</h1>
  <span class="p-2 opacity-70">Buttons</span>
  <div class="flex p-1 m-3 flex-wrap gap-2">
    <Button>Filled</Button>
    <Button variant="normal">Normal</Button>
    <Button variant="tonal">tonal</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="text">Text</Button>
  </div>

  <div class="flex p-1 flex-col">
    <span class="opacity-70 p-2">Button Group</span>
    <ButtonGroup class="mt-4" items={headerButton}></ButtonGroup>
  </div>

  <div class="flex p-2 flex-col">
    <span>Loaders</span>
    <Loader />
  </div>

 <Textfield placeholder="Type your text.." type="text" /> 

</main>

