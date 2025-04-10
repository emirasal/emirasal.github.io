import React, { useState, useEffect } from "react";
import About from "../components/About";
import SideBar from "../components/SideBar";
import Projects from "../components/Projects";
//import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";

const Home = () => {
  
  const [sidebarWidth, setSidebarWidth] = useState(270); // Default width

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setSidebarWidth(parseInt(savedWidth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sideBarWidth", sidebarWidth.toString());
  }, [sidebarWidth]);


  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleHighlight = (id: string) => {
    setHighlightedId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => setHighlightedId(null), 1500); // remove highlight
  };


  return (
    
    <div id="home" className="App flex h-full">
      <div
        className="bg-[#262526] h-full fixed hidden lg:block"
        style={{ width: `${sidebarWidth}px` }}
      >
        <SideBar setWidth={setSidebarWidth} width={sidebarWidth} onProjectClick={handleHighlight} />
      </div>
      <div className="bg-[#1e1e1e] h-full">
        
        <div
          className="bg-[#424042] h-16 hidden lg:block"
          style={{ paddingLeft: `${sidebarWidth}px` }}
        >
          
        </div>
          <div style={{ paddingLeft: `${sidebarWidth}px` }}>
            <Header />
            <About />
            <Projects highlightedId={highlightedId} />
          </div>
        
      </div>
    </div>
  );
};

export default Home;
