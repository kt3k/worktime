module.exports = () => {
  console.log(`
Usage: wt <action> <worktime.yml> [-h|--help] [-v|--version]

Available actions:
  summary <worktime.yml>    Shows the monthly summary of the worktime data.

Options:
  -h, --help                Shows the help message.
  -v, --version             Shows the version.

See https://npm.im/worktime for more details.
  `.trim())
}
