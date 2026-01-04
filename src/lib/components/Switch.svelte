<script>
let {
  checked = $bindable(false),
  disabled = false,
  label = "",
  onchange,
  ...rest
} = $props();

function toggle() {
  if (disabled) return;
  checked = !checked;
  onchange?.(checked);
}
</script>

<button
  role="switch"
  aria-checked={checked}
  aria-disabled={disabled}
  onclick={toggle}
  class="group inline-flex items-center gap-3 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
  {disabled}
  {...rest}
>
  <div 
    class="relative w-13 h-8 rounded-full transition-colors duration-200
    {checked ? 'bg-primary' : 'bg-transparent border border-outline-variant'}
    {disabled ? 'opacity-50' : ''}"
  >
    <div 
      class="absolute top-1 transition-all active:scale-[1.1] duration-200 rounded-full bg-surface shadow-md
      {checked 
        ? 'left-[calc(100%-28px)] bg-on-primary w-6 h-6' 
        : 'left-1.25 top-1.25 size-5 bg-surface-bright'}"
    >
    </div>
  </div>

  {#if label}
    <span class="text-sm select-none {disabled ? 'opacity-50' : ''}">
      {label}
    </span>
  {/if}
</button>
