import { toTreeFnHasIdp } from "../index";
function toTreeFnHasIdpTest() {
  const list = [
    { id: 12, pid: 1, name: "分公司1" },
    { id: 9999, pid: 0, name: "第二个总公司" },
    { id: 999901, pid: 9999, name: "第二个总公司的子公司" },
    { id: 1, pid: 0, name: "总公司" },
    { id: 121, pid: 12, name: "分公司1-1" },
    { id: 131, pid: 13, name: "分公司2-1" },
    { id: 133, pid: 13, name: "分公司2-3" },
    { id: 122, pid: 12, name: "分公司1-2" },
    { id: 13, pid: 1, name: "分公司2" },
    { id: 132, pid: 13, name: "分公司2-2" },
    { id: 123, pid: 12, name: "分公司1-3" },
    { id: 1231, pid: 123, name: "小分公司1122333" },
  ];

  const test = toTreeFnHasIdp(list);
  console.log("test: ", test);
}
toTreeFnHasIdpTest();
