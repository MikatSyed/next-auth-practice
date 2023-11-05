"use client"
import {signIn} from "next-auth/react"

const SignIn = () => {
    return (
        <>
            <h2>SignIn With Next Auth</h2>
        
        <div>
            <button onClick={()=> signIn('google',{callbackUrl:"/"})}>Continue With Google</button>
        </div>
        </>
    );
};

export default SignIn;