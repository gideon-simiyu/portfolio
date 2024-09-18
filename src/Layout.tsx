import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import AppFooter from "./components/shared/AppFooter";
import ThemeSwitcher from "./components/ThemeSwitcher";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: "100dvh" }} className="overflow-y-auto relative">
      <MobileNavbar />
      <Navbar />
      <main>{children}</main>
      <div className="fixed bottom-20 right-2 lg:hidden">
        <ThemeSwitcher />
      </div>
      <AppFooter />
    </div>
  );
}

export default Layout;
