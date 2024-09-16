import dotenv from "dotenv"
import connectMongoDb from "./db/index.js"
import app from "./app.js"

dotenv.config({
  path:"./.env"
})


connectMongoDb()
.then( ( 
  app.listen(process.env.PORT || 3000 ,()=>{
    console.log(`app listion on ${process.env.PORT }` )
  })
))
.catch((error) =>{
  console.log(`connection failed!!`, error)
  throw error
})



