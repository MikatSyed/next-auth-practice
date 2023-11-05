"use server"
import {getServerSession} from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/route";
const ProtectedServerPage = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <h1>This is a  <i style={{color:"red"}}>Server Side</i> Protected Page</h1>
            <p>You are logged in as :<b>{session?.user?.name}</b></p>

        </div>
    );
};

export default ProtectedServerPage;