const Log = async(stack,level,packageName,message)=>{

const logData={
stack:stack,
level:level,
package:packageName,
message:message
};

try{
const response=await fetch(
"http://20.207.122.201/evaluation-service/logs",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbS5zYy51NGFpZTIzMTM3QGFtLnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjMxODQsImlhdCI6MTc3ODA2MjI4NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjA4OGE3NTQ5LWI0YjQtNDU3Yi1iYjE3LTU1ZTRjYzNlYTQyNSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5hcmF5YW5hIG1lZ2hhbmEgcHJhc2FkIiwic3ViIjoiYTQ0MDBmZTUtZWQ5OC00YTUzLTlkZTEtMzgyNWViM2I0ZjEzIn0sImVtYWlsIjoiYW0uc2MudTRhaWUyMzEzN0BhbS5zdHVkZW50cy5hbXJpdGEuZWR1IiwibmFtZSI6Im5hcmF5YW5hIG1lZ2hhbmEgcHJhc2FkIiwicm9sbE5vIjoiYW0uc2MudTRhaWUyMzEzNyIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImE0NDAwZmU1LWVkOTgtNGE1My05ZGUxLTM4MjVlYjNiNGYxMyIsImNsaWVudFNlY3JldCI6ImRXUlRSRFJIV3h3aHh3cHgifQ.js6Zrdus78ewDKFQij66lhPBkSb8wAOBJo5cMD1d9BI"
},
body:JSON.stringify(logData)
}
);

const data=await response.json();
console.log("Log sent",data);
}

catch(error){
console.log("Error sending log",error);
}
};

export default Log;