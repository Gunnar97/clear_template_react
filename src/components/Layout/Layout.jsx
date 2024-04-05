import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loader</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
