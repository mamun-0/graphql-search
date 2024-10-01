import UrqlProvider from "@/providers/urqlProvider";
import { UserLoginContextProvider } from "@/context/UserLoginContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserLoginContextProvider>
      <UrqlProvider>{children}</UrqlProvider>
    </UserLoginContextProvider>
  );
}
