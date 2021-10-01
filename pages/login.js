import React, { useContext } from "react"

import { AuthContext } from "../context/AuthContext"
import { useRouter } from "next/router"
import EmailPasswordAuthLogin from "../components/emailPasswordAuthLogin"
import GoogleSignIn from "../components/googleSignIn"
import GithubSignIn from "../components/githubSignIn"
import FacebookSignIn from "../components/facebookSignIn"

const Login = () => {
  const { currentUser } = useContext(AuthContext)
  const Router = useRouter()

  if (currentUser) {
    Router.push("/")
    return <></>
  } else {
    return (
      <div className="grid place-content-center px-10 py-10 shadow-lg w-max mx-auto mt-6">
        <h1 className="text-center font-black text-3xl mb-2">Login Using</h1>
        <div className="flex flex-col gap-y-3">
          <EmailPasswordAuthLogin />
          <GoogleSignIn />
          <FacebookSignIn />
          <GithubSignIn />
        </div>
      </div>
    )
  }
}

export default Login
