import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import jwt, { JwtPayload } from "jsonwebtoken"

const port = 3450
const jwtPassword = "superkey"
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}))

app.post("/signin",(req,res)=>{
  const {id,email} = req.body
  const token = jwt.sign({id,email}, jwtPassword)
  // will put the cookie in the set-cookie header
  res.cookie("token", token)
  res.json({
    msg: "signin berhasil"
  })
})

app.get("/user",(req,res)=>{
  const token = req.cookies.token
  const decoded = jwt.verify(token, jwtPassword) as JwtPayload
  res.json({
    msg: decoded.email
  })
})

app.post("/signout",(_req,res)=>{
  res.clearCookie("token")
  res.json({
    msg: "signout berhasil"
  })
})

app.listen(port,()=>{
  console.log(`server up at ${port}`)
})
