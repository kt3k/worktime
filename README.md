# worktime v1.0.1

[![CircleCI](https://circleci.com/gh/kt3k/worktime.svg?style=svg)](https://circleci.com/gh/kt3k/worktime)
[![codecov.io](https://codecov.io/github/kt3k/worktime/coverage.svg?branch=master)](https://codecov.io/github/kt3k/worktime?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Summarize worktime.yml

This tool requires ***node >= 6***

# Usage

Install via npm

    npm install -g worktime

The above installs `wt` command.

Then prepare yaml file like the below:

worktime.yml:

```yml
date: 2016-10-03
time: 10:30 - 19:30
break: 1
---
date: 2016-10-06
time: 10:30 - 19:30
break: 1
---
date: 2016-10-07
time: 10:30 - 20:00
break: 1
---
date: 2016-10-08
time: 14:15 - 18:30
break: 0
```

An entry of yaml represents a worktime of a day.

The meaning of properties of each entry is below:

- {string} date The date of the work
- {string} time The start time and end time
- {number} break The break time (in hours)

Then hit the command:

    wt summary worktime.yml

This outputs the summary of monthly worktime like the below:

```yaml
2016-10:
  month: 2016-10
  days: 16
  hours: 120.75
2016-11:
  month: 2016-11
  days: 3
  hours: 23.25
```

# License

MIT
