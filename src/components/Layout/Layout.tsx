import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Navbar user={children.props.user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
