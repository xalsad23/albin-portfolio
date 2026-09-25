import React from 'react';

export default function Navbar() {
  return (
    <header className="max-w-4xl mx-auto w-full flex justify-between items-center py-4">
      <h1 className="text-xl font-bold tracking-tight text-blue-400">Albin Sadiku</h1>
      <nav className="flex gap-6 text-sm text-slate-300">
        <a href="#om" className="hover:text-white transition-colors">Om mig</a>
        <a href="#projekt" className="hover:text-white transition-colors">Projekt</a>
        <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
      </nav>
    </header>
  );
}