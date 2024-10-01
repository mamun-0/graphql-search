"use client";
import { useLoginGlobalContext } from "@/context/UserLoginContext";
import Link from "next/link";
import { useParams, useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
function Header() {
  const { loginUser, setLoginUser } = useLoginGlobalContext();
  const router = useRouter();
  let pathname = usePathname();
  const { locale } = useParams();
  function handleChange(event: any) {
    const lang = event.target.value;
    let newUrl = pathname.replace(locale, lang);
    router.push(`${newUrl}`);
  }
  function handleLogout() {
    localStorage.removeItem("user");
    toast.success("Logout successful!");
    setLoginUser("");
    router.push(`/${locale}`);
  }

  return (
    <div className="container flex justify-between bg-blue-500 p-4 text-2xl text-white">
      <Link href={`/${locale}`} className="hover:text-orange-500">
        Home
      </Link>
      <div className="space-x-2">
        {!loginUser ? (
          <>
            <Link href={`/${locale}/login`} className="hover:text-orange-500">
              Login
            </Link>
            <Link href={`/${locale}/create`} className="hover:text-orange-500">
              Create
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="hover:text-orange-500">
            Logout
          </button>
        )}
         <Link href={`/${locale}/userlist`} className="hover:text-orange-500">
              Users
            </Link>
        <select onChange={handleChange} value={locale} className="p-1 bg-blue-300 text-black">
          <option value="en">English</option>
          <option value="bn">Bengali</option>
          <option value="fr">French</option>
          <option value="pt">Portuguese </option>
        </select>
      </div>
    </div>
  );
}

export default Header;
