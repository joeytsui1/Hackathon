import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export function useColorScheme() {
  // Read from local storage and set initial dark mode preference
  const isDarkStored = localStorage.getItem("isDarkMode");
  const initialIsDark = isDarkStored === "true";

  // State for dark mode
  const [isDark, setIsDark] = React.useState(initialIsDark);

  // Check system preference for dark mode
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  // Update dark mode state and save to local storage when it changes
  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("isDarkMode", newIsDark.toString());
  };

  useEffect(() => {
    // Apply dark mode preference when component mounts
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return {
    isDark,
    toggleDarkMode,
  };
}
