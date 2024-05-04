import React from "react";
import { useColorScheme } from "./useColorScheme";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useColorScheme(); // Use toggleDarkMode from useColorScheme hook

  const containerClassName = `dark-mode-toggle ${
    isDark ? "dark-mode" : "light-mode"
  }`;

//   return (
//     <div className={containerClassName}>
//       <button
//         onClick={toggleDarkMode}
//         aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
//       >
//         <span className="visually-hidden">
//           {isDark ? "Switch to light mode" : "Switch to dark mode"}
//         </span>
//         <div className="slider"></div>
//       </button>
//     </div>
//   );
// };

export default DarkModeToggle;
