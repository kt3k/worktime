const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const { Work } = require('../../lib/domain')

const list = []

const rawData = fs.readFileSync(path.join(__dirname, 'worktime.yml'))

yaml.safeLoadAll(rawData, data => list.push(data))

const collection = new Work.Factory().createFromYamlEntryList(list)

module.exports = collection
