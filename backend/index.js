const { log } = require('console');
const url = require('url');
// var cors = require('cors');
var http = require('http');

http.createServer(function (req, res) {
    const headers = {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };
    const pathname = url.parse(req.url).pathname;
    if (pathname ==='/home') {
        res.writeHead(200, headers);
        const responseData = {
            message:"Hello, GFG Learner",
          articleData:[{
              articleName: "How to send JSON response from NodeJS",
              category:"NodeJS",
              status: "published"
          },
          {
            articleName: "How to send JSON response from NodeJS",
            category:"NodeJS",
            status: "published"
        },
        ],
          endingMessage:"Visit Geeksforgeeks.org for more"
        }
        const jsonContent = JSON.stringify(responseData);
        res.end(jsonContent);
        // res.writeHead(200, {'Content-Type':'text/plain'});
    //    res.write('Hello home!');
    //     res.end();
    }
    else if (pathname ==='/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello about!');
        res.end();
    }
    else if (pathname ==='/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello word!');
        res.end();
    }
    else  {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('page not found!'+pathname);
        res.end();
    }
}).listen(8080,()=>console.log('hi hossein give me money'));