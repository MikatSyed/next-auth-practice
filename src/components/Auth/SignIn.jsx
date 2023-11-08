"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Form from "../Global/Form";
import Button from "../Global/Button";

const SignIn = ({ callbackUrl }) => {
  const handleSignIn = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", { email, password, callbackUrl });
  };
  return (
    <>
      <h2>SignIn With Next Auth</h2>

      <div>
        <button onClick={() => signIn("google", { callbackUrl })}>
          Continue With Google
        </button>
      </div>

      <Form action={handleSignIn} style={{ margin: "50px 0" }}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button value="Login" />
      </Form>

      <div style={{ margin: "40px 0" }}>
        <Link href="/signup">SignUp</Link>
      </div>
    </>
  );
};

export default SignIn;
