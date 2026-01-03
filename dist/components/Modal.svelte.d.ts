export default Modal;
type Modal = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Modal: import("svelte").Component<{
    children: any;
    show?: boolean;
}, {}, "">;
type $$ComponentProps = {
    children: any;
    show?: boolean;
};
