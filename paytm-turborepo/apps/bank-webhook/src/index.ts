import express from "express"
import prisma from "@repo/db/database"

const app = express()

const port = 3210

app.post("/mandiriWebhook", (req, res)=>{
  // zod
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount
  }
  prisma.balance.update({
    where: {
      userId: userId
    },
    data: {
      amount: {
        increment: paymentInformation.amount
      }
    }
  })
})

app.listen(port,()=>{
  console.log(`server run at ${port}`)
})


