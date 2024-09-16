class Apierror extends Error {
   
  constructor (  messeage = 'something went worng',
    statuscode,
    errors,
    stack
     
  ){
      
    super(messeage)
    this.statuscode = statuscode
    this.errors = errors
    this.success = false
    this.data = null

    if (stack) {
      this.stack
    }else{
      Error.captureStackTrace(this,this.constructor)
    }
  }


  
}

export{Apierror}