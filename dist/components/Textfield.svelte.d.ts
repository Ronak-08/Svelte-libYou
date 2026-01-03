export default Textfield;
type Textfield = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<TextFieldProps>): void;
};
declare const Textfield: import("svelte").Component<{
    /**
     * - Input type (text, email, password, etc.)
     */
    type?: string | undefined;
    /**
     * - Placeholder text
     */
    placeholder?: string | undefined;
    /**
     * - Additional CSS classes
     */
    class?: string | undefined;
    /**
     * - Input value (bindable)
     */
    value?: string | undefined;
    /**
     * - Whether the input is disabled
     */
    disabled?: boolean | undefined;
    /**
     * - Whether the input is required
     */
    required?: boolean | undefined;
    /**
     * - Input name attribute
     */
    name?: string | undefined;
    /**
     * - Input id attribute
     */
    id?: string | undefined;
    /**
     * - Input event handler
     */
    oninput?: ((e: Event) => void) | undefined;
    /**
     * - Change event handler
     */
    onchange?: ((e: Event) => void) | undefined;
    /**
     * - Focus event handler
     */
    onfocus?: ((e: FocusEvent) => void) | undefined;
    /**
     * - Blur event handler
     */
    onblur?: ((e: FocusEvent) => void) | undefined;
}, {}, "">;
type TextFieldProps = {
    /**
     * - Input type (text, email, password, etc.)
     */
    type?: string | undefined;
    /**
     * - Placeholder text
     */
    placeholder?: string | undefined;
    /**
     * - Additional CSS classes
     */
    class?: string | undefined;
    /**
     * - Input value (bindable)
     */
    value?: string | undefined;
    /**
     * - Whether the input is disabled
     */
    disabled?: boolean | undefined;
    /**
     * - Whether the input is required
     */
    required?: boolean | undefined;
    /**
     * - Input name attribute
     */
    name?: string | undefined;
    /**
     * - Input id attribute
     */
    id?: string | undefined;
    /**
     * - Input event handler
     */
    oninput?: ((e: Event) => void) | undefined;
    /**
     * - Change event handler
     */
    onchange?: ((e: Event) => void) | undefined;
    /**
     * - Focus event handler
     */
    onfocus?: ((e: FocusEvent) => void) | undefined;
    /**
     * - Blur event handler
     */
    onblur?: ((e: FocusEvent) => void) | undefined;
};
