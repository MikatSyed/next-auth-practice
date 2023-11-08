"use server"

const { getServerSession } = require("next-auth")
import { redirect } from "next/navigation"
import { authOptions } from "../app/api/auth/[...nextauth]/route"
import User from "../model/userModel"
import bcrypt from "bcrypt"
import {generateToken, verifyToken} from "../utils/token"
import sendEmail from "../utils/sendEmail";
const BASE_URL = process.env.NEXTAUTH_URL;

export const updateUser = async({name,image})=>{
const session = await getServerSession(authOptions)
if(!session) throw new Error("unauthorized")

try{
const user = await User.findByIdAndUpdate(session?.user?._id,{
    name,image
},{new:true}).select('-password')

if(!user) throw new Error("User does not exits")

return {message:"Update Profile Sucessfully"}
}catch(error){
redirect(`/errors?error=${error.message}`)
}


}
export const signUpWithCredentials = async(data)=>{
    console.log('28',data);
    try{
        const user = await User.findOne({email:data?.email}) 
        if(user) throw new Error("Email Already Exits!") 
        
        if(data?.password) {
            data.password = await bcrypt.hash( data.password , 10)
        }

        const token = generateToken({user:data})
       
        await sendEmail({
            to:data?.email,
            url: `${BASE_URL}/verify?token=${token}`,
            text:'VERIFY EMAIL'
        })

return {message:"SignUp Sucessfull! Check Your Email to complete Registration"}

}catch(error){
    redirect(`/errors?error=${error.message}`)
}


}
export const verifyWithCredentials = async(token)=>{
   
    try{
     const {user} = verifyToken(token);
     const userExits = await User.findOne({email: user?.email})
     if(userExits) return {message:"Verify Successfully"}
     const newUser = new User(user)
     await newUser.save()
     return {message:"Verify Successfully"}

}catch(error){
    redirect(`/errors?error=${error.message}`)
}


}

// export default updateUser;