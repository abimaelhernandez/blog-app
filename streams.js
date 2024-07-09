const fs = require('fs')

const readStream = fs.createReadStream('./docs/blogThree.txt', 'utf8')
const writeStream = fs.createWriteStream('./docs/blogFour.txt')

// readStream.on('data', (chunk) => {
//   console.log(' --------- NEW CHUNK OF DATA --------- ')
//   console.log(chunk)
//   writeStream.write('\n  NEW CHUNCKS \n')
//   writeStream.write(chunk)
// })

readStream.pipe(writeStream)