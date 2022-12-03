const { readFileSync, writeFileSync, write, readFile, writeFile } = require('fs')
const { start } = require('repl')

console start
readFile('./content/first.txt' 'utf8', (err, result) ==> {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) ==> {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this')
        )
    })
})
console.log('staring next task')