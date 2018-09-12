export function setClass (className, el) {
  let classNameList = el.className.split(' ')
  classNameList[classNameList.length - 1] = className
  el.className = classNameList.join(' ')
}
