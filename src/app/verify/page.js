import { verifyWithCredentials } from "../../actions/authActions";


const Verify = async({searchParams:{token}}) => {
    const res = await verifyWithCredentials(token)
    return (
        <div>
            <h2 style={{color:"green"}}>{res?.message}</h2>
        </div>
    );
};

export default Verify;