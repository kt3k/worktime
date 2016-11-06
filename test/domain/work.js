const moment = require('moment')
const assert = require('assert')
const { expect } = require('chai')

const { Work } = require('../../lib/domain')

describe('Work', () => {
  let work = null
  beforeEach(() => {
    work = new Work({
      date: moment('2016-10-10'),
      startTime: moment('2016-10-10 10:15'),
      endTime: moment('2016-10-10 18:45'),
      breakHours: 1.25,
      note: 'A normal day'
    })
  })

  describe('worktime', () => {
    it('returns the worktime of the day', () => {
      assert(work.worktime() === 7.25)
    })
  })

  describe('month', () => {
    it('returns the month in the format YYYY-MM', () => {
      assert(work.month() === '2016-10')
    })
  })

  describe('toCsvLine', () => {
    it('returns csv line representation', () => {
      expect(work.toCsvLine()).to.equal('2016/10/10,10:15,18:45,1.25,A normal day')
    })
  })
})
