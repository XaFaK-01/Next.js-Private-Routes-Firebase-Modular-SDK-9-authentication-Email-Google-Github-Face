import React, { useCallback } from "react"
import { useRouter } from "next/router"

import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase/clientApp"

const FacebookSignIn = () => {
  const Router = useRouter()

  const loginHandler = useCallback(async () => {
    const provider = new FacebookAuthProvider()

    provider.addScope("public_profile")

    // additional scopes can be added as per requirement
    try {
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      Router.push("/")
    } catch (error) {
      console.log("error")
      alert(error)
    }
  }, [Router])
  return (
    <button
      className="p-3 shadow-lg rounded-lg border-2 flex cursor-pointer bg-blue-600 text-white hover:bg-gray-600 hover:shadow-2xl transition-all duration-500"
      onClick={loginHandler}
    >
      <div className="flex items-center">
        <img
          className="w-8 h-8"
          src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
          alt="facebook"
          w="200"
          h="200"
        />
        <h3 className="ml-4 text-lg font-semibold  my-auto ">
          Continue with Facebook
        </h3>
      </div>
    </button>
  )
}

export default FacebookSignIn
