import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");

const skills = [
  { name: "JavaScript (ES6+)", logo: JsLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "React", logo: ReactLogo },
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Redux", logo: ReduxLogo },
  { name: "Python", logo: PythonLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "Nodejs", logo: NodeJSLogo },
  { name: "SQL", logo: SqlLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "Docker", logo: DockerLogo },
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eros
            non nisi vulputate eleifend. Vestibulum erat ipsum, lacinia ut nibh
            ut, pulvinar interdum lorem. Aliquam et nisi eu risus ultrices
            suscipit nec nec quam. Suspendisse pretium fermentum luctus.
            Maecenas vitae vestibulum ipsum, ut varius diam. Phasellus mattis
            nunc vel purus maximus, sit amet congue ligula tincidunt. Nulla
            tristique luctus lacinia. Nullam ut tortor arcu.
          </code>
          <br />
          <br />
          <code>Aenean in mi non leo placerat suscipit a eget odio:</code>
          <List list={skills} />
        </div>
        <br></br>
        <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Lorem Ipsum</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Masters in Information technology
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2014 - July 2017
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Lorem Ipsum</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Lorem - Paris, France{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• July 2017 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />• Sed id eros non nisi vulputate eleifend. Vestibulum erat
              ipsum, lacinia ut nibh ut, pulvinar interdum lorem.
              <br />• Aliquam et nisi eu risus ultrices suscipit nec nec quam.
              <br />• Suspendisse pretium fermentum luctus.
              <br />• Maecenas vitae vestibulum ipsum, ut varius diam.
              <br />• Phasellus mattis nunc vel purus maximus.
            </code>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
