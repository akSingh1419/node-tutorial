// User modules
// const auth = require('./auth')

// auth.register("Anuj");
// auth.login("Anuj", "qwerty123");







// Node modules

const path = require('path');

// console.log('Folder name -', path.dirname(__filename)); // C:\Users\Anuj\Desktop\nodejs-tut

// console.log('File name- ', path.basename(__filename)); // module.js

// console.log('File extension -', path.extname(__filename)); // .js

// console.log('File object - ', path.parse(__filename));
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Anuj\\Desktop\\nodejs-tut',
//     base: 'module.js',
//     ext: '.js',
//     name: 'module'
//   }

// console.log(path.join(path.dirname(__filename),'public','styles.css')); // C:\Users\Anuj\Desktop\nodejs-tut\public\styles.css







const fs = require('fs');

// To make a Folder
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         console.log('Something went wrong');
//         return;
//     }
//     console.log('Folder created successfully');
// })

// To create a file and write something on it
// fs.writeFile(path.join(__dirname,'test','test.txt'), 
// 'Hello World\n', (err) => {
//     if(err) {
//         console.log('Something went wrong');
//     }
//     console.log('File created successfully');
// })

// To append to a file
// fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 
// 'This is Node', (err) => {
//     if(err) {
//         console.log('Something went wrong');
//     }
//     console.log('File updated');
// })

// To read from a file
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf-8', (err, data) => { // utf-8 returns the data in text format otherwise a buffer is present
//     console.log(data)
// })







const os = require('os');

// console.log('Type of OS', os.type()); //Windows_NT

// console.log('Platform ', os.platform()); // win32

// console.log('Cpu Architecture', os.arch()); // CPU Architecture

// console.log('Cpu details', os.cpus()); // More CPU related details

// console.log('Cpu details', os.freemem()); // Free memory

// console.log('Cpu details', os.totalmem()); // Total memory

// console.log('Cpu details', os.uptime()); // Time since last restart







const Emitter = require('events');

// const myEmitter = new Emitter();

// myEmitter.on('somename', (data) => {
//     console.log(data)
// })

// myEmitter.emit('somename', {
//     name: 'Ramen'
// })

// class Auth extends Emitter {
//     register(username) {
//         console.log('Registered successfully')
//         this.emit('registered', username); // Used to keep other logic separately in different functions
//     }
// }

// An emitter can be added to multiple listeners

// const auth = new Auth();
// auth.on('registered', (data) => { // Listener 1
//     console.log(`Sending mail to ${data}`)
// })
 
// auth.on('registered', (data) => { // Listener 2
//     console.log(`Sending welcome email to ${data}`)
// })

// auth.register('Ramen');