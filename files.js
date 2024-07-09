const fs = require('fs')
// reading files
// fs.readFile('./docs/blog.txt', 'utf8', (err, data) => {
//   if (err) {
//     throw err
//     console.log('eeror readin file', err)
//   }
//   console.log('DARTE', data.toString())
// })
// console.log('here is the end of the file')

// write files 

// fs.writeFile('./docs/blog.txt', 'Hello world', (err) => {
// console.log('file was written on')
// })

// fs.writeFile('./docs/blogTwo.txt', 'Second file Written', (err) => {
//   console.log('file was written on')
// })


// directories
// async tasks 
if(!fs.existsSync('./assets')) {
  // create the directory if it does not exist 
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log('error creating directory')
      // throw err
    }
    console.log('Directory was created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log('error deleting directory')
      // throw err
    }
    console.log('Directory was deleted')
  })
}

// deleting files

if(fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    console.log('file was deleted')
  })
}
