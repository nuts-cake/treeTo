# TreeTo

- update 1.0.1 新增 toTreeFnNoIdp toTreeFnHasIdp 树形数据->平行数据
- update 1.0.4 新增 treeCreateKey treeDeleteKey 创造/删除->键
- update 1.0.9 新增 queryAllPid queryOneNode queryPidLine 查询功能->子查父
- update 1.1.1 优化文档

## 描述 TreeTo 是一个 JavaScript 对于树形结构的转换以及操作查询的工具库
GitHub:https://github.com/nuts-cake/treeTo
npm:https://www.npmjs.com/package/treeto
```
$ npm install treeto

$ yarn add treeto
```

## 内容

- [toTreeFnNoIdp](#toTreeFnNoIdp) 无 id/pId 树形数据-平行数据
- [toTreeFnHasIdp](#toTreeFnHasIdp) 又 id/Pid 树形数据-平行数据
- [treeCreateKey](#treeCreateKey) 树形数据-内部-创造-新参数
- [treeDeleteKey](#treeCreateKey) 树形数据-内部-删除-无用参数
- [queryAllPid](#queryAllPid) 树形数据查询-查找全部父级节点 id
- [queryOneNode](#queryOneNode) 树形数据查询-查找单条节点
- [queryPidLine](#queryPidLine) 树形数据查询-查出整条祖先链 id

## 版本预告

1. 不同情况下:平行数据->树形数据
2. 更多常用查询功能
3. 优化代码

## toTreeFnNoIdp

### 使用递归将平行数据结构转换成树形数据结构(无 id 情况下)

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

### output log:

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

### 平行数据通过 id-pid 的形式 将其转换成(并不局限于只有一个顶级节点)的树形结构 (不通过递归 )

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

### output log:

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

### 在已有的树形结构数据下,生成新的键,适用于简单类型的复制以及对第三方 Ui 库一些不可修改 key 配置的库

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

## query-function

```python
// 查询案例统一使用:
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
```

## queryAllPid

### 查找全部父级节点 id ( 分别找出[xx,xx]的单层父节点 )

```python
# import { queryAllPid } from 'treeto'
const pidList = queryAllPid(treeData,[131,1231])
```

### output log:

```python
 [131,1231,123,13]
```

## queryOneNode(treeData,131)

### 查找单条节点

```python
# import { queryOneNode } from 'treeto'
const node = queryOneNode(treeData,131)
```

### output log:

```python
 {"id":131,"pid":13,"name":"子公司2-1"}
```

## queryPidLine (treeData,131)

### 查出整条祖先链-id

```python
# import { queryPidLine } from 'treeto'
const node = queryPidLine(treeData,131)
```

### output log:

```python
[131,13,1]
```
