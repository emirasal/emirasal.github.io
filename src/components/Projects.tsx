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
              <h2 className="text-xl font-bold flex items-center">
                <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Tournament API
              </h2>
              <p>A Java Spring-based API integrated with MySQL, designed to manage game mechanics including leveling, in-game currency, daily tournaments, and a rewards system."</p>
            </div>

            <div
              id="cloud-storage-drive"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "cloud-storage-drive"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h2 className="text-xl font-bold flex items-center">
                  <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                  Cloud Storage Drive
                </h2>
              <p>A cloud-based storage system deployed on Google Cloud Platform, offering user authentication and secure file upload and management functionalities similar to Dropbox.</p>
            </div>

            <div
              id="to-do"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "to-do"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h2 className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                To-do App
                </h2>
              <p>A to-do management web application with a login system, built using React and Node.js, allowing users to create, edit, and delete tasks. Allowing file upload for thumbnails.</p>
            </div>
            
            <div
              id="variable-manager"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "variable-manager"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h2 className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Variable Manager
              </h2>
              <p>"A web and mobile-compatible application built with Vue.js and Node.js, featuring a login system.</p>
            </div>
            
            <div
              id="restaurant-website"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "restaurant-website"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h2 className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Restaurant Website
                </h2>
              <p>A restaurant website with a search function, category-based browsing, user login, and a shopping cart system for placing orders.</p>
            </div>

            <div
              id="SUrent"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "SUrent"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h2 className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                SUrent E-commerce
                </h2>
              <p>An e-commerce website offering features such as a shopping cart, wishlist, product returns, reviews and ratings, credit card invoice tracking, promotional email communication, and an admin panel for management.</p>
            </div>

            <div
              id="library-management"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "library-management"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h2 className="text-xl font-bold flex items-center">
                  <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                  Library Management
                </h2>
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
              <h2 className="text-xl font-bold flex items-center">
                <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Barcode Reader</h2>
              <p>A barcode reader application that matches scanned barcodes with orders in the database, enabling real-time order tracking and validation.</p>
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
              <h2 className="text-xl font-bold flex items-center">
                <img src={TSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                News App</h2>
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
              <h2 className="text-xl font-bold flex items-center">
                <img src={JSIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Text Formalizer</h2>
              <p>A browser extension that uses an AI API to formalize selected text and correct grammatical errors for improved readability.</p>
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
              <h2 className="text-xl font-bold flex items-center">
                <img src={CsharpIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                Discord Music Bot</h2>
              <p>A Discord music bot that can play YouTube videos with a queue feature, allowing users to add and manage tracks.</p>
            </div>

            <div
              id="disucord"
              className={`p-4 my-4 rounded-lg transition-all duration-500 ${
                highlightedId === "disucord"
                  ? "bg-opacity-10 bg-yellow_vs border-l-4 border-yellow_vs shadow-lg transform scale-[1.02]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h2 className="text-xl font-bold flex items-center">
                <img src={PythonIcon} alt="Logo" className="h-6 w-6 mr-2" /> {/* Logo */}
                DiSUCord</h2>
              <p>A desktop messaging application featuring two communication channels for real-time user interaction.</p>
              
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;