export default CircularProgress;
type CircularProgress = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const CircularProgress: import("svelte").Component<{
    value?: number;
    size?: number;
    max?: number;
    stroke?: number;
    className?: string;
    children: any;
}, {}, "">;
type $$ComponentProps = {
    value?: number;
    size?: number;
    max?: number;
    stroke?: number;
    className?: string;
    children: any;
};
