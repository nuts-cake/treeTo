import { TotreeFnNoIdpType, TotreeFnHasIdpType, PidQueryIdType, IdQueryPidType } from './data.d'
/**
 * 
 * @param list {列表}
 * @param condition {条件}
 * @return {tree}
 */
const toTreeFnNoIdp: TotreeFnNoIdpType = function (list, condition) {
  const newArr: any[] = [];
  condition = JSON.parse(JSON.stringify(condition));
  let order: string | any = condition.shift();
  let holdArr: string[] = [];
  const deep = condition.length;
  list.forEach((item, index) => {
    const holdIndex = holdArr.indexOf(item[order]);
    if (holdIndex > -1) {
      newArr[holdIndex]["children"].push(item);//[order]
    } else {
      holdArr.push(item[order]);
      const newItem: any = { ...item };
      newArr.push({
        children: new Array(item),//[order]
        ...newItem,
      });
    }
  });
  newArr.forEach((item, index) => {
    if (item?.children?.length > 0 && deep) {
      item.children = toTreeFnNoIdp(item.children, condition);
    }
  });
  return newArr;
}

const idQueryPid: PidQueryIdType = (newArr, list, condition) => {
  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    const children: any[] = [];
    for (let index2 = 0; index2 < list.length; index2++) {
      const item2 = list[index2];
      if (item2.pid === item.id) {
        children.push(item2);
        condition.push(item2.id);
      }
    }
    if (children?.length > 0) {
      newArr.push({ ...item, children });
    }
  }
}
const pidQueryid: IdQueryPidType = (newArr) => {
  for (let index = 0; index < newArr.length; index++) {
    const item = newArr[index];
    for (let index2 = 0; index2 < newArr.length; index2++) {
      const item2 = newArr[index2];
      if (item.pid === item2.id) {
        let cIndex = item2.children.findIndex((v: any) => v.id === item.id);
        if (cIndex > -1) {
          item2.children[cIndex] = item;
        }
      }
    }
  }
}
/**
 * 
 * @param list {列表}
 * @return {tree}
 * 
 */
const toTreeFnHasIdp: TotreeFnHasIdpType = function (list = []) {
  const newArr: any[] = [];
  const condition: any[] = [];
  idQueryPid(newArr, list, condition)
  pidQueryid(newArr)
  return newArr.filter((v) => !condition.includes(v.id));
}

export { toTreeFnNoIdp, toTreeFnHasIdp }