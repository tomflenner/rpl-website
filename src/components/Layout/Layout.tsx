import { PropsWithChildren } from "react";
import useSWR from "swr";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, error } = useSWR("/api/auth/user", fetcher);

  if (error) console.error("Failed to load user in layout");

  return (
    <>
      <Navbar user={data?.passport.user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
