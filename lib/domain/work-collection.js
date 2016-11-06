const Summary = require('./summary')

/**
 * WorkCollection represents the aribitrary collection of works.
 */
class WorkCollection {
  /**
   * @param {Work[]} works
   */
  constructor (works) {
    this.works = works
  }

  /**
   * @return {WorkCollection}
   */
  ofMonth (month) {
    return new WorkCollection(this.works.filter(work => work.month() === month))
  }

  /**
   * Returns the array of the months of the works.
   * @return {string[]}
   */
  months () {
    const months = {}

    this.works.forEach(work => {
      months[work.month()] = true
    })

    return Object.keys(months).sort()
  }

  /**
   * Returns the summary of the works.
   * @return {Summary}
   */
  toSummary () {
    return Summary.summarize(this)
  }

  /**
   * Returns the days of the collection.
   * @return {number}
   */
  days () {
    return this.works.length
  }

  /**
   * Returns the total hours of the collection.
   * @return {number}
   */
  totalHours () {
    return this.works.reduce((hours, work) => hours + work.worktime(), 0)
  }

  /**
   * Returns the csv representation of the collection.
   * @return {string}
   */
  toCsv () {
    const header = 'date,start,end,break,note\n'
    return header + this.works.map(work => work.toCsvLine()).join('\n').trim()
  }
}

module.exports = WorkCollection
