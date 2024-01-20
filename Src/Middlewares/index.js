const {check}=require("express-validator")
const {validationResult} = require("express-validator")

exports.validateForm = [
check("name").notEmpty().withMessage("Please Enter Name"),
check("PhoneNumber").isMobilePhone().withMessage("Please Enter Valid PhoneNumber"),
check("Email").isEmail().withMessage("Please Enter Valid Email"),
check("intrest").notEmpty().withMessage("Please Enter intreset"),
 check("message").isLength({max:100,min:1}).withMessage("Please Enter Within 100 chars"),

]
    



exports.isvalidated = (req,res,next) =>{
    const errors = validationResult(req)
if(errors.array().length>0){
  return  res.status(400).json({message:errors.array()[0]})
}
next()
}