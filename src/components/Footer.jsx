import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto w-full text-center text-xs text-slate-500 py-6 border-t border-slate-900">
      © {new Date().getFullYear()} Albin Sadiku. Byggd från grunden med React & Tailwind CSS.
    </footer>
  );
}