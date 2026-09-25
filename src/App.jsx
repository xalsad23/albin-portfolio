import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 md:p-12 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}