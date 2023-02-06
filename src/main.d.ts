import type { Helpers, Root } from "postcss";
/**
 * @type {import('postcss').PluginCreator}
 */
export default function YoudeyiwuMpPostcssPlugin(options?: {
    rootSelectorReplace: [
        {
            find: string;
            replace: string;
        }
    ];
}): {
    postcssPlugin: string;
    Once(_root: Root, _helper: Helpers): void;
};
