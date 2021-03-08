const query=require("../db/db-connection");
const addUser=async (userData)=>{
    let q,checkInDb;
    const gid=String(userData.sub);
    const email=userData.email;
    q= "select id from users where gid="+"\'"+gid+"\'";
    checkInDb=await query(q);
    if(checkInDb.length) return {"affectedRows":1};
    q="insert into users(gid,lastOnline,email) values("+"\'"+gid+"\'"+",NOW()"+","+"\'"+email+"\'"+")";
    const response=await query(q);
    return response;
}
module.exports=addUser;