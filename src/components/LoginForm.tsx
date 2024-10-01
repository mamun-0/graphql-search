"use client";
import { useState } from "react";
import { useMutation } from "urql";
import { LOGIN_HR } from "@/queries/index";
import { toast } from "react-toastify";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useLoginGlobalContext } from "@/context/UserLoginContext";

function LoginForm() {
  
  const { loginUser, setLoginUser } = useLoginGlobalContext();
  const [result, executeMutation] = useMutation(LOGIN_HR);
  const router = useRouter();
  let pathname = usePathname();

 /* 
  const user = localStorage.getItem("user");
  const { locale } = useParams();
  //   if login not show this page.👎
  if (user) {
    return router.push(`/${locale}`);
  }
    */

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  async function handleSubmit(event: any) {
    event.preventDefault();

    const query_variables = {
      email: userData.email,
      password: userData.password,
    };

    const { data } = await executeMutation(query_variables);
    console.log(data);
    if (data?.loginHr?.success) {
      toast.success("Login successful!");
      localStorage.setItem("user", JSON.stringify(true));
      setLoginUser(true);
      pathname = pathname.replace("/login", "");
      router.push(pathname);
    } else {
      toast.error("Invalid email or password");
    }
  }

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div>
        <h2 className="text-4xl mb-4">HR Login</h2>
        <form onSubmit={handleSubmit} className="text-xl space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="border border-gray-600 p-1 rounded-md"
              id="email"
              name="email"
              type="email"
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="border border-gray-600 p-1 rounded-md"
              id="password"
              name="password"
              type="password"
              required
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <button
            className="p-2 bg-blue-500 rounded-md text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
