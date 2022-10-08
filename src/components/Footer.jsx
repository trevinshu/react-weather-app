import React from 'react';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-neutral-50 shadow-md p-4 flex justify-center items-center mt-auto  dark:bg-gray-700">
      <h2 className="text-gray-700 dark:text-neutral-100">Designed and Built by Trevin Shu &copy; {date}</h2>
    </footer>
  );
}

export default Footer;
