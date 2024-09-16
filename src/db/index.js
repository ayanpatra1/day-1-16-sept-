import mongoose from "mongoose"
import{ MONGODB_NAME} from "../constance.js"



const connectMongoDb = async()=>{
   
  try {


      const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${MONGODB_NAME}`)
       console.log(` mongoDb connection sucessful!! DB HOST ${connectionInstence.connection.host}` || " Db Host not availlable ")


  } catch (error) {
    console.log(`Db connection failed!!`, error)
     throw error
  
  }


}


export default connectMongoDb