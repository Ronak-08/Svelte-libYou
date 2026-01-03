export default Toast;
type Toast = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Toast: import("svelte").Component<{
    show?: boolean;
    content?: string;
    className?: string;
    time?: number;
}, {}, "show">;
type $$ComponentProps = {
    show?: boolean;
    content?: string;
    className?: string;
    time?: number;
};
