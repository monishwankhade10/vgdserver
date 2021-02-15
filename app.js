const http=require('http');
var port=process.env.PORT;
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "freedb.tech",
    user: "freedbtech_monishravinandan",
    password: "Monish@1234",
    database: "freedbtech_vgddb"
  });
let res;
  con.connect(function(err) {
    if (err) throw err;
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
    response.end((res[0]).topic);
 }).listen(port);
 
