import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.util';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <p>Im in sign in page</p>
      <button onClick={() => logGoogleUser()}>SIGN IN</button>
    </div>
  );
};

export default SignIn;
