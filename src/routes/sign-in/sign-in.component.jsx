import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async() => {
        const {user } = await signInWithGooglePopup();
        createUserWithEmailAndPassword(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
        </div>
    );
}

export default SignIn;