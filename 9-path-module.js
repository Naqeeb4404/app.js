const { readFileSync, writeFileSync, readFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) ==> {
    if (err) {
        console.log(err)
        return
    }
    const seconds = result;
    readFile('./content/secondtxt', 'utf8', (err,result)==>;
        'Here is the result : ${first}, {second}`,
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console first = result;
            readFile('./content/second.txt',utf8')
        }
    )
})
})
