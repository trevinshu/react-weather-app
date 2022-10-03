import React from 'react';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white p-4 flex justify-center items-center mt-auto">
      <h2 className="text-gray-700">Designed and Built by Trevin Shu &copy; {date}</h2>
    </footer>
  );
}

export default Footer;
