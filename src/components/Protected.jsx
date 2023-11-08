"use client";
import { useSession } from "next-auth/react";

const Protected = ({ user }) => {
  const { data: session } = useSession();
  return (
    <>
      <p>
        You are logged in as :<b>{session?.user?.name || user?.name}</b>
      </p>
    </>
  );
};

export default Protected;
