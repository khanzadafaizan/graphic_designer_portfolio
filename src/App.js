import React, { Suspense, lazy} from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Resume from './pages/Resume';
import ImageCarousel from './components/ImageCarousel';
import ImageSocialCarousel from './components/ImageSocialCarousel';
import Contact from './pages/Contact';

const Logo = lazy(() => import("./pages/Logo"));
const Social_media = lazy (() => import("./pages/Social_media") )
const Videos = lazy (() => import("./pages/Videos"))
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/logo' element={<Logo/>}/>
      <Route path='/conatct' element={<Contact/>}/>
      <Route path='/social_mida' element={<Social_media/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path={"/imageCarousel/:id"} element={<ImageCarousel/>}/>
      <Route path={"/imageSocialCarousel/:id"} element={<ImageSocialCarousel/>}/>
    </Routes>
    </Suspense>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
