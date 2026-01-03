export default FAB;
type FAB = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & HTMLButtonAttributes>): void;
};
declare const FAB: import("svelte").Component<{
    /**
     * - Icon content
     */
    children?: import("svelte").Snippet<[]> | undefined;
    /**
     * - Visual style (default: filled)
     */
    variant?: "filled" | "tonal" | "tertiary" | undefined;
    /**
     * - Optional extra classes
     */
    class?: string | undefined;
} & import("svelte/elements").HTMLButtonAttributes, {}, "">;
type Props = {
    /**
     * - Icon content
     */
    children?: import("svelte").Snippet<[]> | undefined;
    /**
     * - Visual style (default: filled)
     */
    variant?: "filled" | "tonal" | "tertiary" | undefined;
    /**
     * - Optional extra classes
     */
    class?: string | undefined;
};
