const randomNum = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const emojis = ['🤪', '😁', '😸', '😜', '👻', '🌚']
const randomEmoji = () => {
  const num = randomNum(0, 5)
  return emojis[num]
}
const greetings = ['nice.', 'looks good.', 'sounds great.']
const randomGreeting = () => {
  const num = randomNum(0, 2)
  return greetings[num]
}
const debounceFn = (func, wait, immediate) => {
  let timeout, args, context, timestamp, result
  if (null == wait) wait = 100
  function later() {
    let last = Date.now() - timestamp
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        context = args = null
      }
    }
  }
  let debounced = function() {
    context = this
    args = arguments
    timestamp = Date.now()
    let callNow = immediate && !timeout
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args)
      context = args = null
      clearTimeout(timeout)
      timeout = null
    }
  }
  return debounced
}
const debounce = (debouncedRef = {}, fn = () => {}, delayMs = 1000) => {
  return (() => {
    if (debouncedRef.current) debouncedRef.current.clear()
    debouncedRef.current = debounceFn(() => fn(), delayMs)
    debouncedRef.current()
    return debouncedRef.current
  })()
}
const noop = () => {}
export { randomNum, randomEmoji, randomGreeting, debounce, noop }
