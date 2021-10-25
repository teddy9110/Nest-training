import { singleChar } from './SingleChar.interface';
export interface AllChars {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: singleChar[]
}
