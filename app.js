var http=require('http');
var port=process.env.PORT;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "freedb.tech",
    user: "freedbtech_monishravinandan",
    password: "Monish@1234"
  });
var res;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql="select topic from topics where topic_id=45";
    con.query("use freedbtech_vgddb");
    con.query(sql, function (err, result) {
        if (err) throw err;
        res=result;
        console.log("Result: " + JSON.stringify(result));
      });
    
  });

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n'+res);
 }).listen(port);
 
 // Console will print the message
 console.log('Server running at '+port);