const { expect } = require('chai')

const collection = require('../fixture/collection')

describe('Summary', () => {
  describe('toObject', () => {
    it('returns object representation of the summary', () => {
      expect(collection.toSummary().toObject()).to.be.an('object')
    })
  })
})
