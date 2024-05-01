import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Resume from './pages/Resume';
import Logo from './pages/Logo';
import Banner from './pages/Banner';
import ImageCarousel from './components/ImageCarousel';
import Social_media from './pages/Social_media';
import ImageSocialCarousel from './components/ImageSocialCarousel';
import Videos from './pages/Videos';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/logo' element={<Logo/>}/>
      <Route path='/banner' element={<Banner/>}/>
      <Route path='/conatct' element={<Contact/>}/>
      <Route path='/social_mida' element={<Social_media/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path={"/imageCarousel/:id"} element={<ImageCarousel/>}/>
      <Route path={"/imageSocialCarousel/:id"} element={<ImageSocialCarousel/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
