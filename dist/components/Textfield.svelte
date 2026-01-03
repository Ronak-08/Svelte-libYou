<script>
/**
 * @typedef {Object} TextFieldProps
 * @property {string} [type="text"] - Input type (text, email, password, etc.)
 * @property {string} [placeholder=""] - Placeholder text
 * @property {string} [class] - Additional CSS classes
 * @property {string} [value] - Input value (bindable)
 * @property {boolean} [disabled=false] - Whether the input is disabled
 * @property {boolean} [required=false] - Whether the input is required
 * @property {string} [name] - Input name attribute
 * @property {string} [id] - Input id attribute
 * @property {(e: Event) => void} [oninput] - Input event handler
 * @property {(e: Event) => void} [onchange] - Change event handler
 * @property {(e: FocusEvent) => void} [onfocus] - Focus event handler
 * @property {(e: FocusEvent) => void} [onblur] - Blur event handler
 */

/**
 * A Material Design inspired text field component
 * 
 * @example
 * ```svelte
 * <TextField 
 *   type="email" 
 *   placeholder="Enter your email"
 *   bind:value={email}
 * />
 * ```
 */

/**
* @type TextFieldProps
*/
let {
  type = "text",
  placeholder = "",
  class: className = "",
  ...rest
} = $props();
</script>

<input 
  class="p-3 border-2 border-outline-variant rounded-md transition-colors
         focus:border-primary focus:outline-none
         disabled:opacity-50 disabled:cursor-not-allowed
         {className}" 
  {type}
  {placeholder}
  {...rest}
/>
