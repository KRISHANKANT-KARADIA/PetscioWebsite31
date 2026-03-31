// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screen/Home'
import Footer from './components/Footer'
import Media from './screen/Media'
import About from './screen/About'
import WhyPetscio from './screen/WhyPetscio'
import Blog from './screen/Blog'
import ContactUs from './screen/ContactUs'
import BlogDetails from './screen/BlogDetails'
import PrivacyPolicyTC from './screen/PrivacyPolicyTC'
import Faq from './screen/Faq'


function App() {

  return (
    <>
      <div className='container mx-auto'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Media' element={<Media />} />
            <Route path='/About' element={<About />} />
            <Route path='/WhyPetscio' element={<WhyPetscio />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path="/BlogDetails/:id" element={<BlogDetails />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='/PrivacyPolicyTC' element={<PrivacyPolicyTC />} />
          </Routes>
          <Footer />
        </BrowserRouter >
      </div>
    </>
  )
}

export default App

