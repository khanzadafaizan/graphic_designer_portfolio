import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import PostList from "./components/PostList";
import Logo from "./components/Logo";
import Social from "./components/Social";
import SocialMediaList from "./components/SocialMediaList";
import VideosList from "./components/VideosList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/conatct" element={<Contact />} />
          <Route path="/logslist" element={<PostList />} />
          <Route path="/socialmedia" element={<SocialMediaList />} />
          <Route path="/videos" element={<VideosList />} />
          <Route path="/logo/:id" element={<Logo />} />
          <Route path="/social/:id" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
