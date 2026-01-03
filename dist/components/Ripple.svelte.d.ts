export default Ripple;
type Ripple = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Record<string, never>>): void;
};
declare const Ripple: import("svelte").Component<Record<string, never>, {}, "">;
