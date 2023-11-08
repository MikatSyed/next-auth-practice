"use client";
import { useSession } from "next-auth/react";
import ProfileCard from "./ProfileCard";
import ProfileUpdate from "./ProfileUpdate";

const Profile = ({ user }) => {
  const { data: session, update } = useSession();
  console.log({ session });
  return (
    <>
      <ProfileCard user={session?.user || user} />
      <ProfileUpdate update={update} />
    </>
  );
};

export default Profile;
