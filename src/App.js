import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './fairbase.init'
import { useState } from 'react';

const auth = getAuth(app)

function App() {

  const [user, setUser] = useState({})


  const provider = new GoogleAuthProvider()

  const handelGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user);
      })
      .catch(error =>
        console.error(error))
  }
  const handelGoogleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }


  return (
    <div className="App">
      {
        user.email ? <button onClick={handelGoogleSingOut}>Sing Out</button>
          : <button onClick={handelGoogleSingIn}>sing in To Google</button>

      }
      <h2>name:{user.displayName}</h2>
      <h2>Email:{user.email}</h2>

    </div>
  );
}

export default App;
