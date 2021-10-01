import React, { useCallback } from "react"
import { useRouter } from "next/router"
import { auth } from "../firebase/clientApp"
import { createUserWithEmailAndPassword } from "firebase/auth"

import Link from "next/link"

const EmailPasswordAuthSignUp = () => {
  const Router = useRouter()

  const signupHandler = useCallback(
    async (event) => {
      console.log("signupHandler called")
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        console.log(email.value, password.value)
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        Router.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [Router]
  )

  return (
    <div>
      <form
        onSubmit={signupHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="transition-all duration-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <Link href="/login">
            <a className="transition-all duration-500 cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Login ?
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EmailPasswordAuthSignUp
