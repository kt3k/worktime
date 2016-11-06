const minirocket = require('minirocket')

const main = ({_: [action, filename], v, version, help, h, month, m, header}) => {
  version = version || v
  help = help || h || !action
  month = month || m

  minirocket({ version, help, [action]: true }, action => {
    action({filename, month, header})
  }).on('no-action', () => {
    console.log(`Error: no such action: "${action}"`)
    process.exit(1)
  })
}

module.exports = main
