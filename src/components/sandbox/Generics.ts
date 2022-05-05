import { log } from '../../tools' 
import * as util from 'node:util'

export const f = <T>(arr: T[]): Array<T> => {
  return arr
}

// export const f = (arr: any) => {
//   return arr
// }

const nums = f([1,2,3])
const strs = f(['a','b','c'])

export const makeArr = <T, Y>(t: T, y: Y) => {
  return [t, y]
}



// makeArr(('1' as unknown) as number)
makeArr(1, 2)
makeArr(1, true)


