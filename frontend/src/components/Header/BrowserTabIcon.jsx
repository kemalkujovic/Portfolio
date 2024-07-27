import { useEffect } from "react";

const applyFaviconFilter = (src, filter) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const img = new Image();

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.filter = filter;
    context.drawImage(img, 0, 0);
    const filteredFavicon = canvas.toDataURL("image/png");
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = filteredFavicon;
    }
  };

  img.src = src;
};

const updateFavicon = (isDarkMode) => {
  const faviconSrc = "/code.ico";
  const filter = isDarkMode ? "invert(1)" : "none";
  applyFaviconFilter(faviconSrc, filter);
};

const checkSystemPreference = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

export default function BrowserTabIcon() {
  useEffect(() => {
    const systemPrefersDark = checkSystemPreference();
    updateFavicon(systemPrefersDark);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => updateFavicon(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return null;
}
