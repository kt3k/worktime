module.exports = () => {
  console.log(`
Usage: wt <action> <worktime.yml> [-h|--help] [-v|--version] [-m|--month <month>] [--header <header>]

Available actions:
  summary <worktime.yml>    Shows the monthly summary of the worktime data.
  csv <worktime.yml>        Shows the csv summary of the worktime data.

Options:
  -h, --help                Shows the help message.
  -v, --version             Shows the version.
  -m, --month               The month to show in YYYY-MM format e.g. 2016-10
  --header <header>         Use the given header in csv action.

See https://npm.im/worktime for more details.
  `.trim())
}
