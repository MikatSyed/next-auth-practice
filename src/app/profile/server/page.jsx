"use server";

import { getServerSession } from "next-auth/next";
import Profile from "../../../components/Profile/Profile";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const ProfileServer = async () => {
  const server = await getServerSession(authOptions);
  // console.log(server);
  return (
    <>
      <h1 style={{ color: "red" }}>Profile Server Side</h1>
      <Profile user={server?.user} />
    </>
  );
};

export default ProfileServer;
