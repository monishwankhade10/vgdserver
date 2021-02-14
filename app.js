var http=require('http');
var port=process.env.PORT;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "freedb.tech",
    user: "freedbtech_monishravinandan",
    password: "Monish@1234",
    database: "freedbtech_vgddb"
  });
var res;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql="select * from topics where topic_id<5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res=result;
        console.log((res[0]).topic);
      });
    
  });

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n'+res.topic);
 }).listen(port);
 
 // Console will print the message
 console.log('Server running at '+port);