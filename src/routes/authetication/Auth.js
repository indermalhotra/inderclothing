
import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import "./auth.scss";


function Auth() {

    
    
    return (
        <div className="auth-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Auth;

