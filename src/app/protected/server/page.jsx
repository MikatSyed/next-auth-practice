"use server"

const ProtectedServerPage = () => {
    return (
        <div>
            <h1>This is a  <i style={{color:"red"}}>Server Side</i> Protected Page</h1>
            <p>You are logged in as :<b> Mikat Syed</b></p>

        </div>
    );
};

export default ProtectedServerPage;