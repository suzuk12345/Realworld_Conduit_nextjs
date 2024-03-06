"use client";

import { apiUrl } from "@/lib/apiUrl";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    try {
      const response = await fetch(`${apiUrl}users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { email: email, password: password } }),
      })

      if (response.ok) {
        const userObj = await response.json()

        setCookie("token", userObj.user.token, {maxAge: 60 * 10})
        setCookie("username", userObj.user.username, {maxAge: 60 * 10})
        setCookie("image", userObj.user.image, {maxAge: 60 * 10})
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul className="error-messages">
              {/* <li>That email is already taken</li> */}
            </ul>

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  required
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="button"
                onClick={login}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
