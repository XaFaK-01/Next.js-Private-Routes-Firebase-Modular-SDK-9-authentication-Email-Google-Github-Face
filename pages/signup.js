import React, { useCallback, useContext } from "react"
import { useRouter } from "next/router"

import EmailPasswordAuthSignUp from "../components/emailPasswordAuthSignup"

import { AuthContext } from "../context/AuthContext"

import GoogleSignIn from "../components/googleSignIn"
import GithubSignIn from "../components/githubSignIn"
import FacebookSignIn from "../components/facebookSignIn"

const Signup = () => {
  const { currentUser } = useContext(AuthContext)

  const Router = useRouter()

  if (currentUser) {
    Router.push("/")
    return <></>
  } else {
    return (
      <div className="grid place-content-center px-10 py-10 shadow-lg w-max mx-auto mt-6">
        <h1 className="text-center font-black text-3xl mb-2">Sign Up using</h1>
        <div className="flex flex-col gap-y-3">
          <EmailPasswordAuthSignUp />
          <GoogleSignIn />
          <FacebookSignIn />
          <GithubSignIn />
        </div>
      </div>
    )
  }
}

export default Signup
