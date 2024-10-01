"use client";
import { useState } from "react";
import { useMutation } from "urql";
import { CREATE_HR } from "@/queries/index";
import { toast } from "react-toastify";
import { useParams, usePathname, useRouter } from "next/navigation";

function CreateHrForm() {
  const pathName = usePathname();
  const router = useRouter();
  const [result, executeMutation] = useMutation(CREATE_HR);
  /* 
  const user = localStorage.getItem("user");
  const { locale } = useParams();
  //   if login not show this page.👎
  if (user) {
    return router.push(`/${locale}`);
  }
    */
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   form submit handler
  async function handleSubmit(event: any) {
    event.preventDefault();

    const query_variables = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      lang: "1",
    };

    const { data } = await executeMutation(query_variables);
    // response.data.createHr.success
    if (!data.createHr.success) {
      toast.error("This Email already used!");
    } else {
      toast.success("HR created successfully!");
      console.log(data);
      const redirectPath = pathName.replace("/create", "");
      router.push(`${redirectPath}/login`);
    }
  }

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div>
        <h2 className="text-4xl mb-4">Create New HR</h2>
        <form onSubmit={handleSubmit} className="text-xl space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="border border-gray-600 p-1 rounded-md"
              id="name"
              name="name"
              type="text"
              required
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateHrForm;
