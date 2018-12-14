const randomNum = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomEmoji = () => {
  const num = randomNum(0, 5)
  return emojis[num]
}

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

const deepClone = arr => {
  const copy = arr.slice()
  const clonedCopy = copy.map(f => {
    let o = {}
    for (let i in f) o[i] = f[i]
    return o
  })
  return clonedCopy
}

const camelToUnderscore = key =>
  key
    .replace(/\.?([A-Z])/g, function(x, y) {
      return '_' + y.toLowerCase()
    })
    .replace(/^_/, '')

const noop = () => {}

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://app.tcc.im'
    : 'http://localhost:8888'

const httpAttributes = {
  mode: 'cors', // no-cors, cors, *same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached //credentials: 'include', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json; charset=utf-8', // "Content-Type": "application/x-www-form-urlencoded",
  },
  redirect: 'follow', // manual, *follow, error
  referrer: 'no-referrer', // no-referrer, *client
}

const http = {
  post: (url = ``, data = {}) => {
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data), // body data type must match "Content-Type" header
      ...httpAttributes,
    })
      .then(response => response.json())
      .catch(error => ({ error: 'connection error' }))
  },
}

const emojis = ['🤪', '😁', '😸', '😜', '👻']
const greetings = ['nice.', 'looks good.', 'sounds great.']
export {
  randomNum,
  randomEmoji,
  randomGreeting,
  debounce,
  deepClone,
  http,
  noop,
  API_URL,
  camelToUnderscore,
}
