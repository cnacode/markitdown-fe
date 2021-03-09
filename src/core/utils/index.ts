export { emptyNotePlaceHolder } from 'core/utils/consts'

export function truncateString(str: string, max: number) {
  if (str.length <= max) {
    return str
  }
  return str.slice(0, max) + '...'
}

export const serialize = function (obj: { [key: string]: boolean }) {
  var str = []
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  return str.join('&')
}

export const localStorageHandler = {
  get: (name: string) => {
    const stringItem: string | null = window.localStorage.getItem(name)
    return stringItem ? JSON.parse(stringItem) : undefined
  },

  set: (name: string, value: any) => {
    const stringValue = JSON.stringify(value)
    window.localStorage.setItem(name, stringValue)
  },
}
