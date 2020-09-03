const express=require('express')
const app=express()
const PORT=Number(process.env.PORT || 5000)

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/porto.html')
})

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})