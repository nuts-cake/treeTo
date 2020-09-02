import { TreeCreateKeyType, TreeDeleteKeyType } from './data.d'
import { codeData } from '../utils/utils';
// creat 递归
const creatFn: TreeCreateKeyType = function (list, condition) {
    list.forEach((element) => {
        condition.forEach((vv) => {
            element[vv[0]] = element[vv[1]];
        });
        if (element?.children?.length) {
            treeCreateKey(element.children, condition);
        }
    });
    return list;
}
// delete 递归
const deleteFn: TreeCreateKeyType = function (list, condition) {
    list.forEach((element, index) => {
        let bl = Boolean(false);
        condition.forEach((vv) => {
            bl = element[vv[0]] != vv[1];
            if (bl) {
                list.splice(index, 1, null); //delete xx.xx
            }
        });

        if (!bl && element?.children?.length) {
            element.children = deleteFn(element.children, condition);
        }
    });
    list = list.filter((v) => v);
    return list;
}

// creat 母函数
/**
 * 
 * @param list {列表}
 * @param condition {生成key} 
 * @return {tree}
 */
const treeCreateKey: TreeCreateKeyType = function (
    list,
    condition = [["children", Array()]]
) {
    const [newlist, newCondition] = codeData([list, condition])
    return creatFn(newlist, newCondition);
};
// delete 母函数
/**
 * 
 * @param list {列表}
 * @param condition {清除key}
 * @return {tree}
 */
const treeDeleteKey: TreeDeleteKeyType = function (list, condition) {
    const [newlist, newCondition] = codeData([list, condition])
    return deleteFn(newlist, newCondition);
}
export { treeCreateKey, treeDeleteKey }