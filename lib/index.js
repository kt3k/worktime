const minirocket = require('minirocket')

const main = ({_: [action, filename], v, version, help, h}) => {
  minirocket({
    version: v || version,
    help: h || help || !action,
    [action]: true
  }, action => {
    action({filename})
  }).on('no-action', () => {
    console.log(`Error: no such action: "${action}"`)
    process.exit(1)
  })
}

module.exports = main
