/**
 * Monthly work time summary model.
 */
class MonthlySummary {

  /**
   */
  constructor ({month, days, totalHours}) {
    this.month = month
    this.days = days
    this.totalHours = totalHours
  }

  /**
   * Returns the object representation of the monthly summary.
   */
  toObject () {
    return {
      month: this.month,
      days: this.days,
      hours: this.totalHours
    }
  }
}

module.exports = MonthlySummary
