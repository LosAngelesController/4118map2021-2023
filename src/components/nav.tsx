"use client";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";

declare global {
  interface Window {
    google: any;
  }
}

// Function to show Google Translate dropdown
const showTranslateDropdown = () => {
  if (window.google && window.google.translate) {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: window.google.translate.TranslateElement.InlineLayout.COMBO,
      },
      "google_translate_element"
    );
  }
};

const navigationPayroll = [
  {
    name: "41.18",
    url: "/",
    newtab: true,
  },
  {
    name: "LA Controller",
    url: "https://controller.lacity.gov",
    newtab: true,
  },
  {
    name: "Table",
    url: "https://docs.google.com/spreadsheets/d/1BMnzp75G0mWpEDKGgL-jLrZzKA2q8xFRfv0UqTLU0uk/edit?usp=sharing",
    newtab: true,
  }, 
  {
    name: "Analysis",
    url: "https://controller.lacity.gov/landings/analysis/4118recentarrests",
    newtab: true,
  },
];

function Nav() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=showTranslateDropdown";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isMounted]);

  const messageBox = () => {
    alert(
      "-Click & Drag to explore locations on the map, or enter a location in the Search bar.\n\n-Click on a map point to view arrest details by location.\n\n-Click Filter button to view by Race, Year, Council District, Arrest Type, and Time."
    );
  };

  return (
    <div className="z-50 bg-[#1a1a1a] flex flex-col">
      <nav className="z-50 flex flex-row  h-content">
        {navigationPayroll.map((item: any, itemIdx: any) => (
          <ActiveLink
            activeClassName="text-white py-2 md:py-3 px-6 block hover:text-green-300 focus:outline-none text-green-300 border-b-2 font-medium border-green-300"
            href={item.url}
            key={itemIdx}
            target={`${item.newtab === true ? "_blank" : ""}`}
          >
            <p className="text-white py-2 text-sm md:text-base   md:py-3 px-3 block hover:text-green-300 focus:outline-none underline">
              {item.name}
            </p>
          </ActiveLink>
        ))}
        <p
          className="text-white py-2 text-sm md:text-base   md:py-3 px-3 block hover:text-green-300 focus:outline-none underline"
          onClick={messageBox}
        >
          Instructions
        </p>
        <div
          className="text-white py-2 text-sm md:text-base md:py-3 px-3 block hover:text-green-300 focus:outline-none underline"
          onClick={showTranslateDropdown}
        >
          Translate
        </div>
        <div id="google_translate_element" className="translate-dropdown"></div>
      </nav>
    </div>
  );
}

export default Nav;
