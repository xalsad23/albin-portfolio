import React from 'react';

export default function Hero() {
  return (
    <main className="max-w-4xl mx-auto w-full my-auto py-12">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/60 rounded-full">
        Nyexaminerad Systemvetare & Utvecklare
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
        Bygger digitala lösningar med <span className="text-blue-500">struktur</span> och <span className="text-indigo-400">driv</span>.
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
        Hej! Jag är Albin Sadiku, nyexaminerad systemvetare från Örebro universitet med erfarenhet av fullstack-utveckling (.NET, React, SQL) och ett starkt ledarskap från näringslivet.
      </p>
      <div className="flex flex-wrap gap-4">
        <a 
          href="#projekt" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-600/20"
        >
          Utforska mina projekt
        </a>
        <a 
          href="#kontakt" 
          className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium px-6 py-3 rounded-lg transition-all"
        >
          Kontakta mig
        </a>
      </div>
    </main>
  );
}