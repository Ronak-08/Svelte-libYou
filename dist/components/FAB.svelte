<script>
/**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children] - Icon content
   * @property {'filled' | 'tonal' | 'tertiary'} [variant] - Visual style (default: filled)
   * @property {string} [class] - Optional extra classes
   */

/** @type {Props & import('svelte/elements').HTMLButtonAttributes} */
let { 
  children, 
  class: className, 
  variant = "filled", 
  ...rest
} = $props();

const styles = {
  filled: "bg-primary text-on-primary hover:bg-primary/90",
  tonal: "bg-primary-container text-on-primary-container hover:bg-primary-container/80",
  tertiary: "bg-tertiary text-on-tertiary hover:bg-tertiary/80"
};

let variantClass = $derived(styles[variant] || styles.filled);
</script>

<button 
  class="absolute flex justify-center active:brightness-90 items-center shadow-lg rounded-2xl p-4 {variantClass} {className}" 
  {...rest}
>
  {@render children?.()} 
</button>
