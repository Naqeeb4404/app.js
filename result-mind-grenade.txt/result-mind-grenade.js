const { readFile, stat, write } =require('fs')

const GetText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(pathm 'utf8', (err, data) => {
            if (err) {
                reject (err)
            }else{
                resolve(data)
            }
            }
        })
    }

const start = async () const GetText: (path: any) => Promise<>
const first = await GetText('./content/first.txt', 'utf8')
const second = await GetText('./content/second.txt','utf8')
await writeFilePromise()
console.log(first, second)
} catch (error) {
    console.log(error)

}

start()

    // getText('./content/first.txt')
    //...the((result)) => console.log(result))
    //...catch((err)) =>console.log(err))

    const start = async() =>{
        const first = await GetText('./contect/first.txt');
    }
