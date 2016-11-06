const yaml = require('js-yaml')
const fs = require('fs')

const { Work } = require('../domain')

const factory = new Work.Factory()

module.exports = ({filename, month} = {}) => {
  const data = []
  let rawData

  try {
    rawData = fs.readFileSync(filename)
  } catch (e) {
    console.log(`Error: The file is broken or not found: ${filename}`)
    process.exit(1)
  }

  try {
    yaml.safeLoadAll(rawData, entry => {
      data.push(entry)
    })
  } catch (e) {
    console.log(`Error: The yaml file is broken: ${filename}`)
    console.log(e.message)
    process.exit(1)
  }

  const collection = factory.createFromYamlEntryList(data)
  console.log(collection.toCsv())
}
