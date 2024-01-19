import React from 'react';
import HostelAccomodation from './pages/HostelAccomodation';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-[100vw] bg-[white] min-h-[100vh] flex flex-col overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/hostelAccomodation' element={<HostelAccomodation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
