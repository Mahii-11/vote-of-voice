import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "sonner";

export default function AppLayout() {
  return (
    <div>
      <Toaster
        position="top-center"
        richColors
        expand
        duration={2200}
        toastOptions={{
        style: {
        fontSize: "18px",
        padding: "20px",
        minWidth: "360px",
        textAlign: "center",
        },
        }}
       />


      <Navbar/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  );
}
