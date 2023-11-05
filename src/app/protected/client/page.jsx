"use client"
import {useSession} from "next-auth/react"
import { authOptions } from "../../api/auth/[...nextauth]/route";

const ProtectedClientPage = () => {
const {data:session} = useSession();
    return (
        <div>
            <h1>This is a  <i style={{color:"red"}}>Client Side</i> Protected Page</h1>
            <p>You are logged in as :<b>{session?.user?.name}</b></p>

        </div>
    );
};

export default ProtectedClientPage;