export default Sidebar;
type Sidebar = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Sidebar: import("svelte").Component<{
    children: any;
    isOpen?: boolean;
}, {}, "">;
type $$ComponentProps = {
    children: any;
    isOpen?: boolean;
};
