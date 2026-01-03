export default Switch;
type Switch = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Switch: import("svelte").Component<{
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    onchange: any;
} & Record<string, any>, {}, "checked">;
type $$ComponentProps = {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    onchange: any;
} & Record<string, any>;
