import express from "express"
import { userSchema, url } from "@repo/common/config"

const port = 3500
const app = express()

app.get("/",(_req,res)=>{
  res.json({
    msg:"server up",
    url: url
  })
})

app.post("/add",(req,res)=>{
  const input = req.body
  const userFormat = userSchema.safeParse(input)
  res.json({
    msg:userFormat.success
  })
})

app.listen(port,()=>{
  console.log(`server up at ${port}`)
})
