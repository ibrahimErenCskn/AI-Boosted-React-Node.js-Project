import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./pages/App.tsx";
import Layout from "./pages/Layout.tsx";
import Menu from "./pages/Menu.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/hakkimizda" element={<About />} />,
        <Route path="/iletisim" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
