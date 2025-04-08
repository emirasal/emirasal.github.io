import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");

const SideBar = ({
  setWidth,
  width,
}: {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
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
                component={<WebList />}
              />

              {/* Mobile Section */}
              <ToggleSection
                title="Mobile"
                show={showMobileList}
                setShow={setShowMobileList}
                component={<MobileList />}
              />

              {/* Web Extension Section */}
              <ToggleSection
                title="Web Extension"
                show={showExtensionList}
                setShow={setShowExtensionList}
                component={<ExtensionList />}
              />

              {/* Other Section */}
              <ToggleSection
                title="Other"
                show={showOtherList}
                setShow={setShowOtherList}
                component={<OtherList />}
              />
            </>
          )}

          {/* Social Icons */}
          <div className="absolute w-full bottom-10 px-6">
            <div className="flex justify-between">
              <a href="https://github.com/emirasal">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="https://www.linkedin.com/in/emirasal/">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="mailto:emir.asal@gmail.com">
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

const WebList = () => (
  <div className="flex flex-col">
    <ProjectLink icon={JSIcon} name="First Project" />
    <ProjectLink icon={TSIcon} name="Second Project" />
    <ProjectLink icon={JSIcon} name="Third Project" />
    <ProjectLink icon={JSIcon} name="Fourth Project" />
  </div>
);

const MobileList = () => (
  <div className="flex flex-col">
    <ProjectLink icon={TSIcon} name="Mobile App 1" />
    <ProjectLink icon={TSIcon} name="Mobile App 2" />
  </div>
);

const ExtensionList = () => (
  <div className="flex flex-col">
    <ProjectLink icon={JSIcon} name="Dark Mode Switcher" />
    <ProjectLink icon={TSIcon} name="Form Formatter" />
  </div>
);

const OtherList = () => (
  <div className="flex flex-col">
    <ProjectLink icon={JSIcon} name="Personal CLI Tool" />
    <ProjectLink icon={TSIcon} name="Excel Automation Script" />
  </div>
);

// ========== Project Link Component ==========

const ProjectLink = ({ icon, name }: { icon: string; name: string }) => (
  <a href="/">
    <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
      <img src={icon} alt={name} className="w-7 mr-1 ml-5 text-yellow_vs" />
      <p>{name}</p>
    </div>
  </a>
);
