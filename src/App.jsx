import { Route, Routes } from "react-router-dom";
import "./App.css";

import { lazy } from "react";
import Layout from "./components/Layout/Layout";
import ScrollButton from "./helpers/ScrollToTop/ScrollButton";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelkomePage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <ScrollButton />
    </>
  );
}

export default App;
