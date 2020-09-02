export function codeData<T>(data:T):T{
   return JSON.parse(JSON.stringify(data))
 }