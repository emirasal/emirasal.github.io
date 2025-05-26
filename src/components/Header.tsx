import React from "react";

function Header() {

  const handleScroll = () => {
    const section = document.getElementById("Projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div id="Header" className="mx-12 lg:mx-60 items-center justify-center lg:w-1/2 text-justify">
      <br></br> <br></br>
      <div className="flex flex-col">
        <code className="text-lightblue_vs">My name is</code>
        <code className="text-[#e6f1ff] text-5xl mt-5">Emir Asal</code>
      </div>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
        onClick={handleScroll}
      >
          <code>Check out my Projects</code>
      </button>
    </div>
  );
}

export default Header;
