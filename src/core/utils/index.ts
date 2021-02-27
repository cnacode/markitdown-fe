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

export { emptyNotePlaceHolder } from 'core/utils/consts'
