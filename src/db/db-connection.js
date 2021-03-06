const mysql= require("mysql");
//Remote
// const config={
//     //TODO: change these to process environment varible  DATABASE_HOST,DATABASE_USER,DATABASE_PASSWORD,DATABASE
//     host: "freedb.tech", 
//     user: "freedbtech_monishravinandan",
//     password: "Monish@1234",
//     database: "freedbtech_vgddb"
// };
//TODO: remove this local
const config={
    //TODO: change these to process environment varible  DATABASE_HOST,DATABASE_USER,DATABASE_PASSWORD,DATABASE
    host: "localhost", 
    user: "monish",
    password: "",
    database: "vgddb_2"
  };

class DBConnection
{
    constructor()
    {
        this.db=mysql.createPool(config);
    }
    query =async (sql)=>{
        return new Promise((resolve,reject)=>{
            this.db.query(sql,(err,rows)=>{
                if(err) reject(new Error(err));
                else resolve(rows);
            });
        }).catch(err=>{
            throw err;
        });
        
    }

}
module.exports= new DBConnection().query;