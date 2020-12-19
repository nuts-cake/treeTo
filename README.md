# TreeTo
* ** update 1.0.3

## 描述

** TreeTo是一个JavaScript对于树形结构的转换以及操作查询的工具库


## 内容

* [toTreeFnNoIdp](#toTreeFnNoIdp)  无id/pId 树形数据-平行数据
* [toTreeFnHasIdp](#toTreeFnHasIdp) 又id/Pid 树形数据-平行数据
* [treeCreateKey](#treeCreateKey) 树形数据-内部-创造-新参数
* [treeDeleteKey](#treeCreateKey) 树形数据-内部-删除-无用参数


## toTreeFnNoIdp
### 使用递归将平行数据结构转换成树形数据结构(无id情况下)

```python
# import { toTreeFnNoIdp} from 'treeto'
 let list = [
    {
      college: "梦想的学院",
      grade: "一年级",
      clazz: "1班",
    },
    {
      college: "嗷嗷叫学院",
      grade: "二年级",
      clazz: "1班",
      id: "xxx",
    },
    {
      college: "嗷嗷叫学院",
      grade: "一年级",
      clazz: "1班",
      id: "biubiubiu",
    },
    {
      college: "慢羊羊村大学",
      grade: "一年级",
      clazz: "1班",
    },
    {
      college: "梦想的学院",
      grade: "二年级",
      clazz: "1班",
    },
    {
      college: "慢羊羊村大学",
      grade: "一年级",
      clazz: "1班",
    },
  ];
  const winCondition = ["college", "grade", "clazz"];
  const newList = toTreeFnNoIdp(list,winCondition);
```
###  output log:
```
  [
      {
        children: [
          {
            children: [
              {
                children: [
                  { college: "梦想的学院", grade: "一年级", clazz: "1班" },
                ],
                college: "梦想的学院",
                grade: "一年级",
                clazz: "1班",
              },
            ],
            college: "梦想的学院",
            grade: "一年级",
            clazz: "1班",
          },
          {
            children: [
              {
                children: [
                  { college: "梦想的学院", grade: "二年级", clazz: "1班" },
                ],
                college: "梦想的学院",
                grade: "二年级",
                clazz: "1班",
              },
            ],
            college: "梦想的学院",
            grade: "二年级",
            clazz: "1班",
          },
        ],
        college: "梦想的学院",
        grade: "一年级",
        clazz: "1班",
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    college: "嗷嗷叫学院",
                    grade: "二年级",
                    clazz: "1班",
                    id: "xxx",
                  },
                ],
                college: "嗷嗷叫学院",
                grade: "二年级",
                clazz: "1班",
                id: "xxx",
              },
            ],
            college: "嗷嗷叫学院",
            grade: "二年级",
            clazz: "1班",
            id: "xxx",
          },
          {
            children: [
              {
                children: [
                  {
                    college: "嗷嗷叫学院",
                    grade: "一年级",
                    clazz: "1班",
                    id: "biubiubiu",
                  },
                ],
                college: "嗷嗷叫学院",
                grade: "一年级",
                clazz: "1班",
                id: "biubiubiu",
              },
            ],
            college: "嗷嗷叫学院",
            grade: "一年级",
            clazz: "1班",
            id: "biubiubiu",
          },
        ],
        college: "嗷嗷叫学院",
        grade: "二年级",
        clazz: "1班",
        id: "xxx",
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  { college: "慢羊羊村大学", grade: "一年级", clazz: "1班" },
                  { college: "慢羊羊村大学", grade: "一年级", clazz: "1班" },
                ],
                college: "慢羊羊村大学",
                grade: "一年级",
                clazz: "1班",
              },
            ],
            college: "慢羊羊村大学",
            grade: "一年级",
            clazz: "1班",
          },
        ],
        college: "慢羊羊村大学",
        grade: "一年级",
        clazz: "1班",
      },
    ];
```


## toTreeFnHasIdp
### 平行数据通过id-pid的形式 将其转换成(并不局限于只有一个顶级节点)的树形结构 (不通过递归 )

```python
# import { toTreeFnHasIdp } from "treeto";
    let list = [
  { id: 12, pid: 1, name: "分公司-1" },
  { id: 9999, pid: 0, name: "分公司-2" },
  { id: 999901, pid: 9999, name: "子公司2-1" },
  { id: 1, pid: 0, name: "总公司" },
  { id: 121, pid: 12, name: "子公司1-1" },
  { id: 131, pid: 13, name: "子公司2-1" },
  { id: 133, pid: 13, name: "子公司2-3" },
  { id: 122, pid: 12, name: "子公司1-2" },
  { id: 13, pid: 1, name: "子公司2" },
  { id: 132, pid: 13, name: "子公司2-2" },
  { id: 123, pid: 12, name: "子公司1-3" },
  { id: 1231, pid: 123, name: "小子公司1-3-1" },
];
 const newList = toTreeFnHasIdp(list);
```
###  output log:
```
[
      {
        id: 9999,
        pid: 0,
        name: "分公司-2",
        children: [{ id: 999901, pid: 9999, name: "子公司2-1" }],
      },
      {
        id: 1,
        pid: 0,
        name: "总公司",
        children: [
          {
            id: 12,
            pid: 1,
            name: "分公司-1",
            children: [
              { id: 121, pid: 12, name: "子公司1-1" },
              { id: 122, pid: 12, name: "子公司1-2" },
              {
                id: 123,
                pid: 12,
                name: "子公司1-3",
                children: [{ id: 1231, pid: 123, name: "小子公司1-3-1" }],
              },
            ],
          },
          {
            id: 13,
            pid: 1,
            name: "子公司2",
            children: [
              { id: 131, pid: 13, name: "子公司2-1" },
              { id: 133, pid: 13, name: "子公司2-3" },
              { id: 132, pid: 13, name: "子公司2-2" },
            ],
          },
        ],
      },
    ];
```


## treeCreateKey / treeDeleteKey ( 反 )
### 在已有的树形结构数据下,生成新的键,适用于简单类型的复制以及对第三方Ui库一些不可修改key配置的库

```python
# import { treeCreateKey} from 'treeto'
const treeList = [
  {
    id: 9999,
    pid: 0,
    name: "分公司-2",
    children: [{ id: 999901, pid: 9999, name: "子公司2-1" }],
  },
  {
    id: 1,
    pid: 0,
    name: "总公司",
    children: [
      {
        id: 12,
        pid: 1,
        name: "分公司-1",
        children: [
          { id: 121, pid: 12, name: "子公司1-1" },
          { id: 122, pid: 12, name: "子公司1-2" },
          {
            id: 123,
            pid: 12,
            name: "子公司1-3",
            children: [{ id: 1231, pid: 123, name: "小子公司1-3-1" }],
          },
        ],
      },
      {
        id: 13,
        pid: 1,
        name: "子公司2",
        children: [
          { id: 131, pid: 13, name: "子公司2-1" },
          { id: 133, pid: 13, name: "子公司2-3" },
          { id: 132, pid: 13, name: "子公司2-2" },
        ],
      },
    ],
  },
];
// * [新参数,旧参数]
 const createKey = [
  ["data", "children"],
  ["key", "id"],
  ["title", "name"],
];
 const newTreeList = treeCreateKey(treeList,createKey)
```
