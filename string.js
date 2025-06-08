const client=require('./client.js')

async function inti(){
    // await client.set("user:4","jskahdkjhaskdjha").
    await client.expire("cnt",10)
    const result=await client.get('cnt');
    console.log("result --> " ,result);
}

inti()