<script>
import Ripple from './Ripple.svelte';

/**
 * @typedef {Object} ButtonItem 
 * @property {string} label - The text you want to display.
 * @property {import('svelte').Component} [icon] - The icon component (optional).
 * @property {() => void} [action] - The function to run on click.
 * @property {string} [id] - Optional unique ID (useful for logic).
 * @property {string} [style] - Optional custom classes for this specific button.
 */

/**
* @typedef {Object} Props 
* @property {string} [class] - Optional class for the container.
* @property {ButtonItem[]} items - List of buttons to render.
* @property {boolean} [multi] - If true, allows multiple buttons to be selected. Default is false (Radio behavior).
* @property {ButtonItem[]} [selected] - The currently selected item(s). Bind to this!
*/

/**
* @type {Props & import('svelte/elements').HTMLAttributes<HTMLElement>}
*/
let {
  class: className, 
  items = [], 
  multi = false, 
  selected = $bindable([]),
  ...rest
} = $props();

function isSelected(item) {
  return selected.some(s => (s.id || s.label) === (item.id || item.label));
}

function handleSelect(item) {
  if (item.action) item.action();
  const exists = isSelected(item);
  if (multi) {
    if (exists) {
      selected = selected.filter(s => (s.id || s.label) !== (item.id || item.label));
    } else {
      selected.push(item); 
    }
  } else {
    selected = [item];
  }
}
</script>

<div 
  class="inline-flex p-1 gap-1 {className}" 
  role="group" 
  {...rest}
>
  {#each items as item}
    {@const Icon = item.icon}
    {@const active = isSelected(item)}

    <button 
      onclick={() => handleSelect(item)} 
      class="
      relative flex items-center justify-center gap-3 px-3 py-1.5 rounded-3xl  font-medium transition-all duration-200 overflow-hidden
      {active 
        ? 'bg-primary scale-x-105 rounded-lg text-on-primary shadow-sm' 
        : 'text-on-surface-variant bg-surface-container'}
      {item.style || ''}
      "
      aria-pressed={active}
    >
      <Ripple />

      {#if Icon}
        <Icon class="w-4 h-4" /> 
      {/if}

      {item.label}
    </button>
  {/each}
</div>
