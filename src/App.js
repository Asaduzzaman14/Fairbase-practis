import './App.css';
import app from './fairbase.init'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(app)

function App() {

  const provider = new GoogleAuthProvider()

  const handelGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <button onClick={handelGoogleSignIn}>Sing in to Google</button>
    </div>
  );
}

export default App;
