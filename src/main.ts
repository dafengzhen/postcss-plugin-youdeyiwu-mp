import type {Helpers, Root} from "postcss";

/**
 * @type {import('postcss').PluginCreator}
 */
export default function YoudeyiwuMpPostcssPlugin(options = {} as {
    rootSelectorReplace: [{
        find: string,
        replace: string
    }]
}) {
    const rootSelectorReplace = options.rootSelectorReplace || [];
    return {
        postcssPlugin: 'postcss-youdeyiwu-mp',
        Once(_root: Root, _helper: Helpers) {
            rootSelectorReplace.forEach(item => {
                _root.nodes.filter(value => value.type === 'rule' && value.selector.includes(item.find))
                    // @ts-ignore
                    .forEach(value => value.selector = value.selector.replace(item.find, item.replace))
            })
        },
    }
}

module.exports.postcss = true;
