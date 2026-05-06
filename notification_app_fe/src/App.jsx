import {
Card,
CardContent,
Typography,
Button
} from '@mui/material'

import Log from '../../logging_middleware/logger'

function App(){

const notifications=[
{
ID:"d146095a-0d86-4a34-9e69-3900a14576bc",
Type:"Result",
Message:"mid-sem",
Timestamp:"2026-04-22 17:51:30"
},
{
ID:"b283218f-ea5a-4b7c-93a9-1f2f240d64b0",
Type:"Placement",
Message:"CSX Corporation hiring",
Timestamp:"2026-04-22 17:51:18"
},
{
ID:"81589ada-0ad3-4f77-9554-f52fb558e09d",
Type:"Event",
Message:"farewell",
Timestamp:"2026-04-22 17:51:06"
},
{
ID:"0005513a-142b-4bbc-8678-eefec65e1ede",
Type:"Result",
Message:"mid-sem",
Timestamp:"2026-04-22 17:50:54"
}
]

Log("frontend","info","component","Notification page loaded")

return(
<div style={{padding:"20px"}}>

<h1>Notification App</h1>

{
notifications.map((item)=>(

<Card
key={item.ID}
sx={{marginBottom:"20px"}}
>

<CardContent>

<Typography variant="h6">
{item.Message}
</Typography>

<Typography>
Type: {item.Type}
</Typography>

<Typography>
Time: {item.Timestamp}
</Typography>

<Button
variant="contained"
sx={{marginTop:"10px"}}
onClick={()=>{
Log("frontend","debug","component","Notification viewed")
}}
>
View
</Button>

</CardContent>

</Card>

))
}

</div>
)

}

export default App