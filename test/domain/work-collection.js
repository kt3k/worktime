const { expect } = require('chai')

const { Work } = require('../../lib/domain')
const collection = require('../fixture/collection')

describe('WorkCollection', () => {
  describe('ofMonth', () => {
    it('returns the work collection of the given month', () => {
      expect(collection.ofMonth('2016-10')).to.be.instanceof(Work.Collection)
    })
  })

  describe('months', () => {
    it('returns the months of the given collection', () => {
      expect(collection.months()).to.eql([
        '2016-10',
        '2016-11'
      ])
    })
  })

  describe('toSummary', () => {
    it('returns the summary object', () => {
      const summary = collection.toSummary()

      expect(summary).to.be.instanceof(Work.Summary)
    })
  })
})
