import { TreeQueryPidType, TreeQueryOneNodeType, TreeQueryPidLineType } from './data.d'
import NutsTips from '../utils/utils';

/**
 * @查找全部父级节点id
 */
export const queryAllPid: TreeQueryPidType = (treeData = [], checkedKeys = []) => {
  treeData.forEach((item) => {
    const has = checkedKeys.includes(item.id);
    if (has) {
      checkedKeys.push(item.pid);
    }
    if (item?.children) {
      queryAllPid(item?.children, checkedKeys);
    }
  });
  return NutsTips.wipeRedo(checkedKeys);
}

/**
 * @查找单条节点
 */
export const queryOneNode: TreeQueryOneNodeType = (treeData = [], id = '') => {
  for (let index = 0; index < treeData.length; index += 1) {
    const element = treeData[index];
    if (element.id === id) {
      return element;
    } else if (element.children) {
      const seekOut = queryOneNode(element.children, id);
      if (seekOut) {
        return seekOut;
      }
    }
  }
}

/**
 * @查出整条祖先链id
 */
export const queryPidLine: TreeQueryPidLineType = (treeData = [], id = '', line = []) => {
  const NodeItem = queryOneNode(treeData, id);
  line.push(NodeItem?.id || '');
  if (NodeItem?.pid) {
    queryPidLine(treeData, NodeItem.pid, line);
  }
  return NutsTips.wipeRedo(line); //reverse
}
