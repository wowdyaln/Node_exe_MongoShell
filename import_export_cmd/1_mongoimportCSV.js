
// const fs = require("fs")
const path = require("path")
const shell = require("child_process")
const rootDir = require('./lib/dir_path.js')
const database = require('./lib/database_name.js')
const filesPath = require('./lib/getAllFilePath.js')

let paths = filesPath.getAllFilePath(rootDir)

//! excute mongo shell
// * mport all CSV files to MongoDB
paths.forEach(file => {
  let fileName = path.basename(file, '.csv')
  shell.execSync(`mongoimport -d ${database} -c ${fileName} --type csv --file ${rootDir}/${file} --headerline`)
})
