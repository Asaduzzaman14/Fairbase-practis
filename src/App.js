import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './fairbase.init'
import { useState } from 'react';

const auth = getAuth(app)

function App() {

  const [user, setUser] = useState({})


  const provider = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider()
  const facebook = new FacebookAuthProvider()



  // google sing-in
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


  // gitHub sing -in

  const hanleGItHubsingIn = () => {
    signInWithPopup(auth, gitProvider)
      .then(res => {
        const user = res.user
        setUser(user)
        console.log(user)
      })
      .then(err => {
        console.error(err)
      })

  }
  // Facebook sign in
  const hanleFacebooksingIn = () => {
    signInWithPopup(auth, facebook)
      .then((result) => {
        setUser(result.user)
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })

  }

  // 
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
        user.email ? <div>
          <button onClick={handelGoogleSingOut}>Sing Out</button>
        </div>
          : <div> <button onClick={handelGoogleSingIn}>sing in To Google</button>

            <button onClick={hanleFacebooksingIn}>faceBook Sign in</button>
            <button onClick={hanleGItHubsingIn}>sing in To GitHub</button>
          </div>

      }
      <h2>name:{user.displayName}</h2>
      <h2>Email:{user.email}</h2>

    </div>
  );
}

export default App;
