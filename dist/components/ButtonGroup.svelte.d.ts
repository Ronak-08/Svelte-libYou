export default ButtonGroup;
type ButtonGroup = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props & HTMLAttributes<HTMLElement>>): void;
};
declare const ButtonGroup: import("svelte").Component<{
    /**
     * - Optional class for the container.
     */
    class?: string | undefined;
    /**
     * - List of buttons to render.
     */
    items: {
        /**
         * - The text you want to display.
         */
        label: string;
        /**
         * - The icon component (optional).
         */
        icon?: import("svelte").Component<any, any, string> | undefined;
        /**
         * - The function to run on click.
         */
        action?: (() => void) | undefined;
        /**
         * - Optional unique ID (useful for logic).
         */
        id?: string | undefined;
        /**
         * - Optional custom classes for this specific button.
         */
        style?: string | undefined;
    }[];
    /**
     * - If true, allows multiple buttons to be selected. Default is false (Radio behavior).
     */
    multi?: boolean | undefined;
    /**
     * - The currently selected item(s). Bind to this!
     */
    selected?: {
        /**
         * - The text you want to display.
         */
        label: string;
        /**
         * - The icon component (optional).
         */
        icon?: import("svelte").Component<any, any, string> | undefined;
        /**
         * - The function to run on click.
         */
        action?: (() => void) | undefined;
        /**
         * - Optional unique ID (useful for logic).
         */
        id?: string | undefined;
        /**
         * - Optional custom classes for this specific button.
         */
        style?: string | undefined;
    }[] | undefined;
} & import("svelte/elements").HTMLAttributes<HTMLElement>, {}, "selected">;
type Props = {
    /**
     * - Optional class for the container.
     */
    class?: string | undefined;
    /**
     * - List of buttons to render.
     */
    items: {
        /**
         * - The text you want to display.
         */
        label: string;
        /**
         * - The icon component (optional).
         */
        icon?: import("svelte").Component<any, any, string> | undefined;
        /**
         * - The function to run on click.
         */
        action?: (() => void) | undefined;
        /**
         * - Optional unique ID (useful for logic).
         */
        id?: string | undefined;
        /**
         * - Optional custom classes for this specific button.
         */
        style?: string | undefined;
    }[];
    /**
     * - If true, allows multiple buttons to be selected. Default is false (Radio behavior).
     */
    multi?: boolean | undefined;
    /**
     * - The currently selected item(s). Bind to this!
     */
    selected?: {
        /**
         * - The text you want to display.
         */
        label: string;
        /**
         * - The icon component (optional).
         */
        icon?: import("svelte").Component<any, any, string> | undefined;
        /**
         * - The function to run on click.
         */
        action?: (() => void) | undefined;
        /**
         * - Optional unique ID (useful for logic).
         */
        id?: string | undefined;
        /**
         * - Optional custom classes for this specific button.
         */
        style?: string | undefined;
    }[] | undefined;
};
