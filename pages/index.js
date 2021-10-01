import React, { useContext } from "react"

import { auth } from "../firebase/clientApp"
import { signOut } from "firebase/auth"

import AuthRoute from "../HOC/authRoute"

import { AuthContext } from "../context/AuthContext"

function Index() {
  const { userData } = useContext(AuthContext)

  const signOutHandler = async () => {
    await signOut(auth)
  }

  return (
    <AuthRoute>
      <div>
        <h1 className="text-8xl text-center font-black">Home</h1>
        <button
          className="text-center p-3 border-2 bg-gray-800 text-white rounded-lg mx-auto block mt-10"
          onClick={signOutHandler}
        >
          Sign out
        </button>
        <div className="mt-4 flex flex-col gap-y-2">
          <div className="flex gap-x-3 items-center justify-center">
            <h4>Authentication method:</h4>
            <h6>{userData.userProviderId}</h6>
          </div>
          <div className="flex gap-x-3 items-center justify-center">
            <h4>userId:</h4>
            <h6>{userData.userId}</h6>
          </div>
          <div className="flex gap-x-3 items-center justify-center">
            <h4>display name:</h4>
            <h6>{userData.userName ? userData.userName : "null"}</h6>
          </div>
          <div className="flex gap-x-3 items-center justify-center">
            <h4>email:</h4>
            <h6>{userData.userEmail}</h6>
          </div>
          <div className="flex gap-x-3 items-center justify-center">
            <h4>Profile picture</h4>
            {userData.userPhotoLink ? (
              <img
                className="rounded-full object-contain w-32 h-32"
                src={userData.userPhotoLink}
                alt={userData.userName}
              />
            ) : (
              "null"
            )}
          </div>
        </div>
      </div>
    </AuthRoute>
  )
}

export default Index
