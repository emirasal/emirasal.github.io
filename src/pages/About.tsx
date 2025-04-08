import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");


const JavaLogo = require("../assets/logos/JavaLogo.png");
const CsharpLogo = require("../assets/logos/C#Logo.png");
const SpringLogo = require("../assets/logos/SpringLogo.png");
const NetLogo = require("../assets/logos/NetLogo.png");
const OracleLogo = require("../assets/logos/OracleLogo.png");



const skills = [
  { name: "Java", logo: JavaLogo },
  { name: "C#", logo: CsharpLogo },
  { name: "JavaScript", logo: JsLogo },
  { name: "Spring Boot", logo: SpringLogo },
  { name: ".NET", logo: NetLogo },
  { name: "React", logo: ReactLogo },
  { name: "Python", logo: PythonLogo },
  { name: "Node.js", logo: NodeJSLogo },
  { name: "Oracle", logo: OracleLogo },
  { name: "MySQL", logo: SqlLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "Docker", logo: DockerLogo }
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <br></br> <br></br>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
          I'm a full-stack developer specializing in backend development. I enjoy building robust systems and always focused on writing efficient and maintainable code. 
          I've worked on a variety of projects from small apps to full-stack platforms which you can explore here on my website or github page.
          </code>
          <br />
          <br />
          <code>My tech stack:</code>
          <List list={skills} />
        </div>
        <br></br> <br></br>
        <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Sabanci University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Computer Science & Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 09/2019 - 06/2024
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Isper A.S.</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Software Engineer - Full-time{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 11/2024 - Present</code>
            <br /> <br /> 
            
            <code className="text-blue_vs">Sabanci University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Learning Assistant - Part-time{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 10/2023 - 01/2024</code>
            <br /> <br />

            <code className="text-blue_vs">Index Group</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Software Engineer Intern - Full-time{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 06/2023 - 08/2023</code>
            <br /> <br />

          </div>

          
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default About;
