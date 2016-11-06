const moment = require('moment')
const Work = require('./work')

// The time format delimiter
// This means the time in the format 10:15 - 18:45
// splitted to ['10:15', '18:45']
const timeDelimiter = /\s*-\s*/

class WorkFactory {
  /**
   * Creates work model from the object of worktime.yml entry object.
   * @param {Object} obj The yaml entry object
   */
  createFromYamlEntryObject (obj) {
    const date = moment(obj.date)
    const [startTime, endTime] = obj.time.split(timeDelimiter).map(time => {
      return moment(`${date.format('YYYY-MM-DD')} ${time}`, 'YYYY-MM-DD HH:mm')
    })
    const breakHours = obj.break
    const note = obj.note

    return new Work({date, startTime, endTime, breakHours, note})
  }

  /**
   * Creates the work collection from the given list.
   * @param {Object[]} list The yaml entry object list
   * @return {WorkCollection}
   */
  createFromYamlEntryList (list) {
    return new Work.Collection(list.map(obj => this.createFromYamlEntryObject(obj)))
  }
}

module.exports = WorkFactory
