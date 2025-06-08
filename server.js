const express=require('express')
const axios=require('axios').default
const app=express()
const client=require('./client.js')

app.get("/",async(req,res)=>{

    const catchvalue=await client.get('todos')
    if(catchvalue){
        return res.json(JSON.parse(catchvalue))
    }
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts")
    await client.set('todos',JSON.stringify(data))
    await client.expire('todos',40)
    return res.json(data)
})

app.listen(8000,()=>{
    console.log("hello")
})