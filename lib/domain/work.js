/**
 * Work model represents a work in a day.
 */
class Work {

  static get Factory () {
    return require('./work-factory')
  }

  static get Collection () {
    return require('./work-collection')
  }

  static get Summary () {
    return require('./summary')
  }

  /**
   * @param {moment} date The date of the work
   * @param {moment} startTime The start time of the work
   * @param {moment} endTime The end time of the work
   * @param {number} breakHours The break time of the work
   * @param {string} note The arbitrary note
   */
  constructor ({date, startTime, endTime, breakHours, note}) {
    this.date = date
    this.startTime = startTime
    this.endTime = endTime
    this.breakHours = breakHours
    this.note = note
  }

  /**
   * Returns the month in string format `YYYY-MM`.
   */
  month () {
    return this.date.format('YYYY-MM')
  }

  /**
   * Returns the working hours in the day.
   * @return {number}
   */
  worktime () {
    return (this.endTime.diff(this.startTime, 'minute') - this.breakHours * 60) / 60
  }

  /**
   */
  toCsvLine () {
    return `${this.date.format('YYYY/MM/DD')},${this.startTime.format('HH:mm')},${this.endTime.format('HH:mm')},${this.breakHours},${this.note}`
  }
}

module.exports = Work
