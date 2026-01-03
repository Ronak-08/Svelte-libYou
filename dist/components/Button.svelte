<script>
import Ripple from "./Ripple.svelte";

/** 
* @typedef {Object} Props
* @property {import('svelte').Snippet} [children]
* @property {'normal' | 'filled' | 'tonal' | 'outline' | 'text'} [variant] - visual style
@property {string} [class] - optional classes

*/

/** 
@type {Props & import('svelte/elements').HTMLAttributes<HTMLElement>}
*/
let { children, variant = "filled", class: className, ...rest} = $props();

const styles = {
  normal: "bg-surface-container-high text-on-surface hover:bg-surface-container-high/90",
  filled: "bg-primary text-on-primary hover:bg-primary/90",
  tonal: "bg-primary-container text-on-primary-container hover:bg-primary-container/80",
  outline: "bg-transparent focus:border-outline-variant border border-outline-variant/90",
  text: "bg-transparent text-primary hover:bg-primary/10"
};

let variantClass = $derived(styles[variant] || styles.filled);
</script>

<button 
  class="p-1.5 px-3 relative overflow-hidden rounded-full select-none active:rounded-xl font-normal transition active:brightness-90 flex items-center justify-center gap-2 {variantClass} {className}"
  {...rest}
>
  <Ripple />
  <span class="relative z-10">
  {@render children?.()}
  </span>
</button>
