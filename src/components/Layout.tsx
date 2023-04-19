import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";
const Layout = ({ children }: any) => {
  return (
    <div className="Content">
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
