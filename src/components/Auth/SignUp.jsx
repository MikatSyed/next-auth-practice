"use client";
import Form from "../Global/Form";
import Button from "../Global/Button";
import { signUpWithCredentials } from "../../actions/authActions";
import Link from "next/link";

const SignUp = () => {
  const handleSignUp = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await signUpWithCredentials({ name, email, password });
    if (res?.message) alert(res?.message);
  };
  return (
    <>
      <h2>Sign Up With Next Auth</h2>
      <Form action={handleSignUp} style={{ marginTop: "30px" }}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Button value="Register" />
      </Form>
      <div style={{ margin: "30px 0 " }}>
        <Link href="/signin">SignIn</Link>
      </div>
    </>
  );
};

export default SignUp;
