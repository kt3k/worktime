const { expect } = require('chai')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const { Work } = require('../../lib/domain')

const factory = new Work.Factory()

describe('WorkFactory', () => {
  describe('createFromYamlEntryObject', () => {
    it('creates the work model from the yaml entry object', () => {
      const work = factory.createFromYamlEntryObject({
        date: '2016-10-10',
        time: '10:15 - 18:45',
        break: 1.25
      })

      expect(work.breakHours).to.equal(1.25)
      expect(work.startTime.format('HH:mm')).to.equal('10:15')
      expect(work.endTime.format('HH:mm')).to.equal('18:45')
      expect(work.date.format('YYYY-MM-DD')).to.equal('2016-10-10')
    })
  })

  describe('createFromYamlEntryList', () => {
    it('creates a work collection', () => {
      const list = []

      const rawData = fs.readFileSync(path.join(__dirname, '../fixture/worktime.yml'))
      yaml.safeLoadAll(rawData, data => list.push(data))

      const collection = factory.createFromYamlEntryList(list)

      expect(collection).to.be.instanceof(Work.Collection)
    })
  })
})
