
import SignIn from "../../components/Auth/SignIn"

const SigninPage = ({searchParams:{callbackUrl}}) => {
    console.log(callbackUrl);
    // console.log(searchParams);
    return (
        <>
           <SignIn callbackUrl={callbackUrl || "/"}/>
        </>
    );
};

export default SigninPage;