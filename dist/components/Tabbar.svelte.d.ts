export default Tabbar;
type Tabbar = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Tabbar: import("svelte").Component<{
    links: {
        label: string;
        href: string;
        /**
         * - The default icon component
         */
        icon: import("svelte").Component;
        /**
         * - Optional active state icon
         */
        activeIcon?: import("svelte").Component<any, any, string> | undefined;
    }[];
}, {}, "">;
type $$ComponentProps = {
    links: {
        label: string;
        href: string;
        /**
         * - The default icon component
         */
        icon: import("svelte").Component;
        /**
         * - Optional active state icon
         */
        activeIcon?: import("svelte").Component<any, any, string> | undefined;
    }[];
};
