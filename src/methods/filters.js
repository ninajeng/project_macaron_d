export function currency(num) {
  const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
  return num.toString().replace(comma, ',')
}

export function unixToDate(unixTime) {
  const dateTime = new Date(unixTime * 1000)
  return dateFormat(dateTime)
}

export function unixToTime(unixTime) {
  const dateTime = new Date(unixTime * 1000)
  return timeFormat(dateTime)
}

export function unixToDatetime(unixTime) {
  const dateTime = new Date(unixTime * 1000)
  return dateFormat(dateTime) + ' ' + timeFormat(dateTime)
}

export function datetimeToUnix(datetime) {
  const unixTime = new Date(datetime)
  return unixTime / 1000
}

function dateFormat(date) {
  return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`
}

function timeFormat(dateTime) {
  return dateTime.toTimeString().substring(0, 8)
}
