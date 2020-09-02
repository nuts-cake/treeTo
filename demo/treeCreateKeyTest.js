function treeCreateKeyTest() {
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

  const testList = toTreeFnNoIdpTest(list);
}
