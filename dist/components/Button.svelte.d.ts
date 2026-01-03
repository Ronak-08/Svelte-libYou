export default Button;
type Button = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & HTMLAttributes<HTMLElement>>): void;
};
declare const Button: import("svelte").Component<{
    children?: import("svelte").Snippet<[]> | undefined;
    /**
     * - visual style
     */
    variant?: "normal" | "filled" | "tonal" | "outline" | "text" | undefined;
    /**
     * - optional classes
     */
    class?: string | undefined;
} & import("svelte/elements").HTMLAttributes<HTMLElement>, {}, "">;
type Props = {
    children?: import("svelte").Snippet<[]> | undefined;
    /**
     * - visual style
     */
    variant?: "normal" | "filled" | "tonal" | "outline" | "text" | undefined;
    /**
     * - optional classes
     */
    class?: string | undefined;
};
