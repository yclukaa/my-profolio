import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutMePage from "./pages/AboutMe";
import ContactPage from "./pages/Contact";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
