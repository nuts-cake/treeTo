
export default class NutsTips {
  // ! 深拷贝 ( 对象数组 )
  static deepCopy<T>(data: T): T {
    return JSON.parse(JSON.stringify(data))
  }
  // ! 浅拷贝 ( 对象数组 )
  static simpleCopy = (data: any) => {
    if (!data) {
      return ''
    }
    if (Object.prototype.toString.call(data) == '[object Array]') {
      return [...data]
    } else {
      return { ...data }
    }
  }
  // ! 简单类型-去重
  static wipeRedo<T>(list: T[]): T[] {
    return [...new Set(list)]
  }
}