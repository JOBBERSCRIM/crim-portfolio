// src/components/Header.js
import React from "react";

function Header() {
  return (
    <nav className="bg-black text-white py-4">
  <div className="text-center">
    <h2 className="text-2xl font-bold">JOBBERS CRIM OKIRIA</h2>
    <ul className="flex justify-center gap-6 mt-2">
      {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="text-white no-underline hover:text-green-400 transition-colors duration-200"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>

  );
}

export default Header;
