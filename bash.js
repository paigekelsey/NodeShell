const userInput = () => {
    process.stdout.write('prompt > ');

    process.stdin.on('data', (data) => {
        if (data === 'pwd') {
            const pwd = require('./pwd.js');
            pwd();
        } else if (data === 'ls') {

        }

        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    })

}






const fs = require('fs')
console.log(fs)