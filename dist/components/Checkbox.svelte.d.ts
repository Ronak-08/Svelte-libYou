export default Checkbox;
type Checkbox = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Checkbox: import("svelte").Component<{
    checked?: boolean;
    class: any;
} & Record<string, any>, {}, "checked">;
type $$ComponentProps = {
    checked?: boolean;
    class: any;
} & Record<string, any>;
