

const logData = {};
process.argv.slice(2).map((arg, index) => {
  logData[`arg${index}`] = arg;
});

let password = process.argv[2]
let phonebookName = String(process.argv[3])
let phonebookNumber = Number(process.argv[4])

console.log(logData)
console.log(password, phonebookName, phonebookNumber)