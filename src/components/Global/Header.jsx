"use server"
import authOptions from "../../app/api/auth/[...nextauth]/route"
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import SignOut from "../../components/Auth/SignOut"

const Header = async () => {
    const session = await getServerSession(authOptions)
    // console.log(session);
    return (
        <div style={{display:"flex",gap:30}}>
            <Link href="/">Home</Link>
            <Link href="/protected/client">Protected (Client) </Link>
            <Link href="/protected/server">Protected (Server) </Link>
           
            

            {session ? 
            <>
            <Link href="/profile/client">Profile (Client)</Link>
            <Link href="/profile/server">Profile (Server)</Link>
            <Link href="/dashboard">Admin Dashboard</Link>
            <SignOut/>
            </> :
            <>
            <Link href="/signin">SignIn</Link>
            </>}
          
        </div>
    );
};

export default Header;