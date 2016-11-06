const MonthlySummary = require('./monthly-summary')
/**
 * The total summary of the work time.
 */
class Summary {

  /**
   * @param {WorkCollection} works
   */
  static summarize (works) {
    return new Summary(works.months().map(month => {
      const worksOfMonth = works.ofMonth(month)

      return new MonthlySummary({
        month: month,
        days: worksOfMonth.days(),
        totalHours: worksOfMonth.totalHours()
      })
    }))
  }

  /**
   * @param {MonthlySummary[]} monthlySummaries
   */
  constructor (monthlySummaries) {
    this.monthlySummaries = monthlySummaries
    this.sort()
  }

  sort () {
    this.monthlySummaries.sort((x, y) => {
      if (x.month < y.month) {
        return -1
      } else if (x.month > y.month) {
        return 1
      } else {
        return 0
      }
    })
  }

  toObject () {
    const obj = {}

    this.monthlySummaries.forEach(summary => {
      obj[summary.month] = summary.toObject()
    })

    return obj
  }
}

module.exports = Summary
