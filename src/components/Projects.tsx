import React from "react";
import { FolderOpenIcon } from "@heroicons/react/solid";

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const PythonIcon = require("../assets/logos/C#Logo.png");
const CsharpIcon = require("../assets/logos/PythonLogo.png");

const Projects = ({ highlightedId }) => {
  return (
    <div
      id="Projects"
      className="flex mx-12 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <br></br> <br></br>
        <div className="table">
          <FolderOpenIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Projects
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        
        <div className="text-[#a2aabc] text-lg">
          <div id="ProjectsSection" className="pt-9">
            {/* Web Projects */}
            
            <div className="mb-8">
              <h5 className="text-xl text-yellow_vs mb-4 flex items-center">
                <span className="mr-2">🌐</span> Web
              </h5>

              <div
              id="tournament-api"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "tournament-api"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
              href="https://github.com/emirasal/Tournament-Game-API"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold flex items-center">
                <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Tournament API
              </a>
              <p>An API integrated with MySQL, designed to manage game mechanics including leveling, in-game currency, daily tournaments, and a rewards system.</p>
            </div>

            <div
              id="cloud-storage-drive"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "cloud-storage-drive"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/Cloud-Storage-Drive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                  <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                  Cloud Storage Drive
                </a>
              <p>A cloud-based storage system deployed on Google Cloud Platform.</p>
            </div>

            <div
              id="to-do"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "to-do"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/To-Do-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                To-do App
                </a>
              <p>A to-do management application with a login system, built using React and Node.js, allowing users to create, edit, and delete tasks.</p>
            </div>
            
            <div
              id="variable-manager"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "variable-manager"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/Variable-Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Variable Manager
              </a>
              <p>Key-value pair manager built with Vue.js and Node.js, featuring a login system.</p>
            </div>
            
            <div
              id="restaurant-website"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "restaurant-website"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a
                href="https://github.com/emirasal/Restaurant-Website"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Restaurant Website
                </a>
              <p>A restaurant website with a search function, category-based browsing, user login, and a shopping cart system for orders.</p>
            </div>

            <div
              id="SUrent"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "SUrent"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/E-commerce-SUrent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                SUrent E-commerce
                </a>
              <p>E-commerce website offering features such as a shopping cart, wishlist, reviews, credit card invoices, and an admin panel.</p>
            </div>

            <div
              id="library-management"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "library-management"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/Library-Management"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                  <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                  Library Management
                </a>
              <p>A library management website integrated with an SQL database.</p>
            </div>

            <div
              id="barcode-reader"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "barcode-reader"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer" 
                className="text-xl font-bold flex items-center">
                <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Barcode Reader
                </a>
              <p>A barcode reader application that matches scanned barcodes with orders in the database, enabling order tracking and validation.</p>
            </div>
            </div>
            {/* Mobile Projects */}

            <div className="mb-8">
              <h1 className="text-xl text-yellow_vs mb-4 flex items-center">
                <span className="mr-2">📱</span> Mobile
              </h1>

            <div
              id="news-app"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "news-app"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/Android-News-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                News App
                </a>
              <p>An Android news app featuring multiple categories.</p>
            </div>
            
            
            </div>
            {/* Web Extension Projects */}

            <div className="mb-8">
              <h1 className="text-xl text-yellow_vs mb-4 flex items-center">
                <span className="mr-2">🧩</span> Web Extension
              </h1>

            <div
              id="text-formalizer"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "text-formalizer"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/text-formalizer-extension"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Text Formalizer
                </a>
              <p>Formalizes and corrects the grammatical errors of selected text using and AI API.</p>
            </div>

            </div>
            {/* Others */}

            <div className="mb-8">
              <h1 className="text-xl text-yellow_vs mb-4 flex items-center">
                <span className="mr-2">🔧</span> Other
              </h1>

            <div
              id="discord-music-bot"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "discord-music-bot"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/discord-music-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                <img src={CsharpIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Discord Music Bot</a>
              <p>A bot that can play YouTube videos with a queue feature.</p>
            </div>

            <div
              id="disucord"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "disucord"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <a 
                href="https://github.com/emirasal/DiSUcord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold flex items-center">
                <img src={PythonIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                DiSUCord</a>
              <p>A messaging application featuring two communication channels for real-time user interaction.</p>
              
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;