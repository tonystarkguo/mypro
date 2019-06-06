var baseUrl = '';
let routerMode = 'hash'

if (process.env.NODE_ENV == 'development') {
  baseUrl = ''
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://47.101.130.9'
}
export {
  baseUrl,
  routerMode
}
