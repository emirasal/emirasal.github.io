import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const PythonIcon = require("../assets/logos/C#Logo.png");
const CsharpIcon = require("../assets/logos/PythonLogo.png");


const SideBar = ({
  setWidth,
  width,
  onProjectClick,
}: {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  onProjectClick: (id: string) => void;
}) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);
  const [showMobileList, setShowMobileList] = useState(true);
  const [showExtensionList, setShowExtensionList] = useState(true); // ✅ new
  const [showOtherList, setShowOtherList] = useState(true); // ✅ new

  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const delta = mouseMoveEvent.clientX - mouseDownEvent.clientX;
      const newWidth = Math.max(170, mouseDownEvent.clientX + delta);
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setWidth(parseInt(savedWidth));
    }
  }, [setWidth]);

  return (
    <div className="flex h-full">
      <div className="text-[#a2aabc] text-lg mt-5 flex w-full">
        <div>
          {/* Projects Section */}
          <div
            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
            onClick={() => SetShowProjectsList(!showProjectsList)}
          >
            {showProjectsList ? (
              <ChevronDownIcon className="w-7 mr-1" />
            ) : (
              <ChevronRightIcon className="w-7 mr-1" />
            )}
            <p>Projects</p>
          </div>

          {showProjectsList && (
            <>
              {/* Web Section */}
              <ToggleSection
                title="Web"
                show={showWebList}
                setShow={SetShowWebList}
                component={<WebList onProjectClick={onProjectClick} />}
              />

              {/* Mobile Section */}
              <ToggleSection
                title="Mobile"
                show={showMobileList}
                setShow={setShowMobileList}
                component={<MobileList onProjectClick={onProjectClick} />}
              />

              {/* Web Extension Section */}
              <ToggleSection
                title="Web Extension"
                show={showExtensionList}
                setShow={setShowExtensionList}
                component={<ExtensionList onProjectClick={onProjectClick} />}
              />

              {/* Other Section */}
              <ToggleSection
                title="Other"
                show={showOtherList}
                setShow={setShowOtherList}
                component={<OtherList onProjectClick={onProjectClick} />}
              />
            </>
          )}

          {/* Social Icons */}
          <div className="absolute w-full bottom-10 px-6">
            <div className="flex justify-between">
              <a 
              href="https://github.com/emirasal"
              target="_blank"
              rel="noopener noreferrer">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="https://www.linkedin.com/in/emirasal/"
              target="_blank"
              rel="noopener noreferrer">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="mailto:emir.asal@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
                <img
                  src={MailLogo}
                  alt="Mail Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resizer */}
      <div
        className="bg-[#262526] h-full border-r border-gray-700 border-opacity-50 hover:border-opacity-100 hover:border-blue-500 w-3 hover:cursor-col-resize"
        onMouseDown={startResizing}
      ></div>
    </div>
  );
};

export default SideBar;

// ========== Section Toggle Helper ==========
const ToggleSection = ({
  title,
  show,
  setShow,
  component,
}: {
  title: string;
  show: boolean;
  setShow: (val: boolean) => void;
  component: JSX.Element;
}) => (
  <>
    <div
      className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
      onClick={() => setShow(!show)}
    >
      {show ? (
        <ChevronDownIcon className="w-7 mr-1 ml-5" />
      ) : (
        <ChevronRightIcon className="w-7 mr-1 ml-5" />
      )}
      <p>{title}</p>
    </div>
    {show && component}
  </>
);

// ========== Section Content Lists ==========

const WebList = ({ onProjectClick }: { onProjectClick: (id: string) => void }) => (
    <div className="flex flex-col">
     <div onClick={() => onProjectClick("tournament-api")}>
      <ProjectLink icon={TSIcon} name="Tournament API" />
    </div>
    <div onClick={() => onProjectClick("cloud-storage-drive")}>
      <ProjectLink icon={TSIcon} name="Cloud Storage Drive" />
    </div>
    <div onClick={() => onProjectClick("to-do")}>
      <ProjectLink icon={JSIcon} name="To-do App" />
    </div>
    <div onClick={() => onProjectClick("variable-manager")}>
      <ProjectLink icon={JSIcon} name="Variable Manager" />
    </div>
    <div onClick={() => onProjectClick("restaurant-website")}>
      <ProjectLink icon={JSIcon} name="Restaurant Website" />
    </div>
    <div onClick={() => onProjectClick("SUrent")}>
      <ProjectLink icon={JSIcon} name="SUrent E-commerce" />
    </div>
    <div onClick={() => onProjectClick("library-management")}>
      <ProjectLink icon={JSIcon} name="Library Management" />
    </div>
    <div onClick={() => onProjectClick("barcode-reader")}>
      <ProjectLink icon={TSIcon} name="Barcode Reader" />
    </div>
  </div>
);

const MobileList = ({ onProjectClick }: { onProjectClick: (id: string) => void }) => (
  <div className="flex flex-col">
    <div onClick={() => onProjectClick("news-app")}>
      <ProjectLink icon={TSIcon} name="News App" />
    </div>

    <div onClick={() => onProjectClick("math-practice")}>
      <ProjectLink icon={JSIcon} name="MathPractice" />
    </div>

    <div onClick={() => onProjectClick("english-flashcards")}>
      <ProjectLink icon={JSIcon} name="English Flashcards" />
    </div>
  </div>

  
);

const ExtensionList = ({ onProjectClick }: { onProjectClick: (id: string) => void }) => (
  <div className="flex flex-col">
    <div onClick={() => onProjectClick("text-formalizer")}>
      <ProjectLink icon={JSIcon} name="Text Formalizer" />
    </div>
  </div>
);

const OtherList = ({ onProjectClick }: { onProjectClick: (id: string) => void }) => (
  <div className="flex flex-col">
    <div onClick={() => onProjectClick("discord-music-bot")}>
      <ProjectLink icon={PythonIcon} name="Discord Music Bot" />
    </div>
    <div onClick={() => onProjectClick("disucord")}>
      <ProjectLink icon={CsharpIcon} name="DiSUCord" />
    </div>
  </div>
);

// ========== Project Link Component ==========

const ProjectLink = ({ icon, name }: { icon: string; name: string }) => (

    <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
      <img src={icon} alt={name} className="w-7 mr-1 ml-5 text-yellow_vs" />
      <p>{name}</p>
    </div>

);
