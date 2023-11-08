"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Protected from "../../../components/../components/Protected";
const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>
        This is a <i style={{ color: "red" }}>Server Side</i> Protected Page
      </h1>
      <Protected user={session?.user} />
    </div>
  );
};

export default ProtectedServerPage;
