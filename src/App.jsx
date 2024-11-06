import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Aboutpage, Contactpage, Homepage, ServicesPage } from './pages';
import { Footer, Header } from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
