const express = require('express');

const app = express();




//  * here I am tring to connect using the ftps node module to connaect and fetch the data from server.
//  *
//  * 


var FTPS = require('ftps');
var ftps = new FTPS({
  host: 'pavan', 
username: 'ftpuser',
password : '67********@ftp',
  protocol: 'ftp', //here you can give any kind of protocol like ftp ftps ftpes etc
  port: 21, // Optional
  escape: false,

  secureOptions: { rejectUnauthorized: false },

  secure: true,
  
  retries: 2,
  timeout: 10, 
  retryInterval: 5, 
  retryMultiplier: 1, // Optional
  autoConfirm: true, // Optional, is used to auto confirm ssl questions on sftp or fish protocols, defaults to false
  cwd: '',
//   additionalLftpCommands: 'set ssl:ca-file "/etc/ssl/certs/ca-certificates.crt"', // Additional commands to pass to lftp, splitted by ';'
  additionalLftpCommands: 'set ssl:verify-certificate no' // Additional commands to pass to lftp, splitted by ';'
  });


// ftps.cd('./Test').cat('./Test/HIS').exec(console.log);

    getFileNames = function(fileNames) {
    ftps.cd('/files').ls('')
    // .cat('helloPavan.txt')
    .exec(function(err, res) {
        console.log(err);
        // console.log(res.data)
        var fileNames = [];
        var files = [];
        files = res.data.split('\n');

        for(let i=0;i<files.length;i++){
            let temp = files[i]

            fileNames.push(temp.split(' ').slice(-1).pop())

        }


        console.log(fileNames)


        });
    }



    getFileNames()



app.listen(8080,()=>{
    console.log("server is listing on port 8080....")
});
