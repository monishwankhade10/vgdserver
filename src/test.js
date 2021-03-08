// import agora from "../src/agora/AgoraCustom";
// import db from "../src/db/db-connection";
// import tokenGen from "../src/Channel/Channel";
// import fetch from "node-fetch";
const fetch=require("node-fetch");
//const fetch=fetch();

async function foo(chann){

    const token="eyJhbGciOiJSUzI1NiIsImtpZCI6ImU4NzMyZGIwNjI4NzUxNTU1NjIxM2I4MGFjYmNmZDA4Y2ZiMzAyYTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0ODUzODA0ODU0NDMtM29yMzdvOWJqZDd1Z3RpdmE5bmZzNnQxZ3F0ZjBzc3YuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0ODUzODA0ODU0NDMtMWw5dnJyMDQ5cWM0bWlkc3IxcTIzbjA1NTcwZ3NoYXEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcwNjg0NTA2OTkzOTI2OTU2MzAiLCJlbWFpbCI6Im1vbndhbjc4NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1vbmlzaCBXYW5raGFkZSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaWVZellkXzZWNDhJUzZLdzV1eGF1VUFhcGNCVER4dG1yOEpBMWdxZz1zOTYtYyIsImdpdmVuX25hbWUiOiJNb25pc2giLCJmYW1pbHlfbmFtZSI6IldhbmtoYWRlIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MTUxODY5NjAsImV4cCI6MTYxNTE5MDU2MH0.rR6TTqrYQxDMeaRT0gvLVXSs9Pm2QSVIx5Xa6uXloOBpGBWxZAmBmYH2BcQ8hFnh8G3kfQ2Swqm4ElInxGIHWA4xWh7j7hnPactqJ-WV56wZl5WWjziYHSuBO22GE21lzij5wWsUsGNTrGewH7FtFsVsXaMvX0Axygx5I5IEZ2NC_7u97UW3AsWHpo_KJZFOGHyQvO9RNc6Dj8mMYnDW-Vzzi249wM0yspPXl_rixKJXqzy4gIJW1zaLCu_tbZSfyM1btICexTTnZ1RCDlQg4shaeGu4q2Og3JVd1he3rSiulhFeSyXYxiGB95Ld0wswKkL2cZX9GHQa5jlC_icS1A";
    const result =await fetch('https://oauth2.googleapis.com/tokeninfo?id_token='+token)
    .then(res =>{
        console.log(res.status);
        return res.json();});

    console.log(result);

}


foo();














// let channelName="NKA8NM",id=53,memberCount=3,channel="NKDAKM";
// let topic={
//     "id":32
// }
// let sql1,sql2,sql3,sql4,sql5,sql6;
// sql1="select topic from topics where topic_id="+id;
// sql2="select channelName from channels where channelName="+"\'"+channelName+"\'";
// sql3="select channelName,memberCount,topic_id from channels where memberCount<4";
// sql4="update channels set memberCount="+memberCount+" where channelName="+"\'"+channel+"\'";
// sql5="insert into channels values("+"\'"+channel+"\'"+","+topic.id+","+1+","+"NOW()"+")";

// foo();

// console.log(sql1,"\n",sql2,"\n",sql3,"\n",sql4,"\n",sql5);


