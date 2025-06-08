const client=require('./client.js')

async function inti(){
    await client.lpush("msg",1)
    await client.lpush("msg",2)
    await client.lpush("msg",1)
    await client.lpush("msg",2)
    const result=await client.lpop("msg")
    console.log(result)
}

inti()