
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import { createUserDocumentFromAuth, signinWithGooglePopup } from "../utils/firebase/firebase"

function Signin() {

    const logGoogleUser = async () => {
        const response = await signinWithGooglePopup();
        console.log(response)
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }
    
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with google</button>
            <SignUpForm/>
        </div>
    )
}

export default Signin

