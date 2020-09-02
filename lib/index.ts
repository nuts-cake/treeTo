import { toTreeFnNoIdp, toTreeFnHasIdp } from './dataToTree/index';
import { treeCreateKey, treeDeleteKey } from './initTree/index';
/**
 * toTreeFnNoIdp  无id data->tree
 * toTreeFnHasIdp 有id data->tree ( 支持多tree )
 * treeCreateKey  生成key
 * treeDeleteKey  清除key
 */
export {
    toTreeFnNoIdp,
    toTreeFnHasIdp,
    treeCreateKey,
    treeDeleteKey
}