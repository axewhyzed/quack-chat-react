import React from 'react'
import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <button onClick={googleSignIn} style={{borderRadius: "10px", backgroundColor: "white", padding: "10px"}}>Sign In with Google</button>
    </div>
  )
}

export default SignIn