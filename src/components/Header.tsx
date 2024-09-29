"use client";
import { useParams, useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const { locale } = useParams();
  function handleChange(event: any) {
    const lang = event.target.value;
    console.log(lang);
    router.push(`/${lang}`);
  }

  return (
    <div className="container flex justify-between bg-blue-500 p-4 text-2xl text-white">
      <h2>Select Language</h2>
      <select onChange={handleChange} value={locale} className="text-black">
        <option value="en">English</option>
        <option value="bn">Bengali</option>
        <option value="fr">French</option>
        <option value="pt">Portuguese </option>
      </select>
    </div>
  );
}

export default Header;
