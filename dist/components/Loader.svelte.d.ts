export default Loader;
type Loader = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Loader: import("svelte").Component<{
    /**
     * - size of the loader
     */
    size?: "sm" | "md" | "lg" | "xl" | undefined;
    class?: string | undefined;
}, {}, "">;
type Props = {
    /**
     * - size of the loader
     */
    size?: "sm" | "md" | "lg" | "xl" | undefined;
    class?: string | undefined;
};
