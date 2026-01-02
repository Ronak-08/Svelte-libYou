<script>
import Ripple from './Ripple.svelte';

/**
 * @typedef {Object} ButtonItem 
 * @property {string} label - the text u want to display
 * @property {import('svelte').Component} [icon] - the icon compoment (optional)
 * @property {() => void} [action] - the function to run on click
 * @property {string} [style] - optional classes for button
 */

/**
* @typedef {Object} Props 
* @property {string} [class] - optional class
* @property {ButtonItem[]} items - buttons in the group
*/

/**
* @type {Props & import('svelte/elements').HTMLAttributes<HTMLElement>}
*/
let {class: className, items = [], ...rest} = $props();
</script>

<div class="inline-flex gap-1 p-1 {className}" role="group" {...rest}>
  {#each items as item, i}
    {@const Icon = item.icon || "" }
    <button onclick={item.action} class="flex relative overflow-hidden gap-1 p-1.5 justify-center {item.style} items-center transition-all active:opacity-90 active:rounded-xl {i === 0 ? 'rounded-l-lg' : ''} 
      {i === items.length - 1 ? 'rounded-r-lg' : ''} {item.style || ''}">
      <Ripple />
      {#if Icon}
        <Icon /> 
      {/if}
      {item.label}
    </button>
  {/each}
</div>
