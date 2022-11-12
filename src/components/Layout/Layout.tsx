import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
