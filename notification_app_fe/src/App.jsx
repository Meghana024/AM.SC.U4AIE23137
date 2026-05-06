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
id:1,
message:"New assignment uploaded",
type:"info",
status:"unread"
},
{
id:2,
message:"Server maintenance tonight",
type:"warning",
status:"read"
},
{
id:3,
message:"Meeting scheduled at 4 PM",
type:"alert",
status:"unread"
}
]

Log("frontend","info","component","Notification page loaded")

return(
<div style={{padding:"20px"}}>

<h1>Notification App</h1>

{
notifications.map((item)=>(

<Card
key={item.id}
sx={{marginBottom:"20px"}}
>

<CardContent>

<Typography variant="h6">
{item.message}
</Typography>

<Typography>
Type: {item.type}
</Typography>

<Typography>
Status: {item.status}
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