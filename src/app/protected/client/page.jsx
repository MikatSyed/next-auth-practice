"use client";
import Protected from "../../../components/../components/Protected";

const ProtectedClientPage = () => {
  return (
    <div>
      <h1>
        This is a<i style={{ color: "red" }}>Client Side</i>
        Protected Page{" "}
      </h1>
      <Protected />
    </div>
  );
};

export default ProtectedClientPage;
