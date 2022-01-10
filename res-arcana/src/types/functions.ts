import { And, _And, Or, _Or } from './types'

const isAnd = (value: And<any>): value is _And<any> => {
  return typeof value === 'object' && value.and
}

export const getAnd = <T>(value: And<T>): T[] => {
  return isAnd(value) ? value.and : [value]
}

const isOr = (value: Or<any>): value is _Or<any> => {
  return typeof value === 'object' && value.or
}

export const getOr = <T>(value: Or<T>): T[] => {
  return isOr(value) ? value.or : [value]
}
