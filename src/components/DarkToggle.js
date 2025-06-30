import React, { useState, useEffect } from "react";

function DarkToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md transition"
      aria-label="Toggle Dark Mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkToggle;
