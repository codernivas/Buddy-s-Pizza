"use client"

import Image from "next/image"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginInProgress, setLoginInProgress] = useState(false)

  async function handleFormSubmit(ev) {
    ev.preventDefault()
    setLoginInProgress(true)
    const { ok } = await fetch("api/login", {
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    if (ok) {
    } else {
    }
    setLoginInProgress(false)

  }
  return( 
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
           <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={loginInProgress }
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={loginInProgress}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
        
      </form>
    </section>

  )
}
