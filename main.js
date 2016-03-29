/*
 * Cytonn Technologies
 *
 * @author: Joseph Gicha e <jgichane@cytonn.com>
 *
 * Project: Node Js.
 *
 */
var http = require("http");
//var express = require("express");
var fs = require("fs");

//non blocking code
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});


http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   displayHtml = "<html><head><title>JGichane NodeJs</title></head>  <body> <h2>Learning Node js at Cytonn Technologies</h2></body></html>";
   // Send the response body as "Hello World"
   response.end(displayHtml);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
console.log("Program Ended");
