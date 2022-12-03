const { readFileSync, writeFileSync, write } = require('fs')

const first = readFileSync('./content/first.txt' 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    Here is the result : ${first}, ${second}`,
    { flag:'a'}
    (err, result) ==> {
        console.log(err)
        return
    }
    console.log(result)
}

)