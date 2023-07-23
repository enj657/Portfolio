import React from "react";
import Tilt from "react-parallax-tilt";
import { workProjects } from "@component/data/data";
import { personalProjects } from "@component/data/data";

export default function Projects() {
  const dataWorkProj = workProjects();
  const dataPersonalProj = personalProjects();

  return (
    <section className="p-4 md:p-0" id="projects">
      <h2 className="md:p-8">Work Projects</h2>
      {dataWorkProj.map((dataItem) => (
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#e3e3e3"
          glarePosition="top"
          glareBorderRadius="1.5rem"
          scale={1.05}
          key={dataItem.id}
        >
          <div className="grid sm:grid-cols-6 py-8 relative md:mb-10 md:p-8 md:backdrop-filter md:backdrop-blur-sm rounded-3xl">
            <div className="col-span-2">
              <img className="w-5/6" src={dataItem.src} alt="" />
            </div>
            <div className="col-span-4">
              <p>
                <a
                  className="after:content[''] after:absolute md:after:bg-white md:after:bg-opacity-5 md:after:shadow-3xl md:after:rounded-3xl md:after:border-0 md:after:border-t md:after:border-white md:after:border-opacity-30 after:-inset-x-0 after:-inset-y-0"
                  href={dataItem.href}
                  target="_blank"
                >
                  {dataItem.website}
                </a>
              </p>
              <p className="mb-4">{dataItem.publishDate}</p>
              <ul className="flex gap-2 flex-wrap">
                {dataItem.listItems.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-1 bg-gradient-to-b from-teal-900  to-teal-700 rounded-3xl md:shadow-3xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Tilt>
      ))}

      
      <h2 className="md:p-8">Personal Projects</h2>
      {dataPersonalProj.map((dataItem) => (
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#e3e3e3"
          glarePosition="top"
          glareBorderRadius="1.5rem"
          scale={1.05}
          key={dataItem.id}
        >
          <div className="grid sm:grid-cols-6 py-8 relative md:mb-10 md:p-8 md:backdrop-filter md:backdrop-blur-sm rounded-3xl">
            <div className="col-span-2">
              <img className="w-5/6" src={dataItem.src} alt="" />
            </div>
            <div className="col-span-4">
              <p>
                <a
                  className="after:content[''] after:absolute md:after:bg-white md:after:bg-opacity-5 md:after:shadow-3xl md:after:rounded-3xl md:after:border-0 md:after:border-t md:after:border-white md:after:border-opacity-30 after:-inset-x-0 after:-inset-y-0"
                  href={dataItem.href}
                  target="_blank"
                >
                  {dataItem.website}
                </a>
              </p>
              <p className="mb-4">{dataItem.publishDate}</p>
              <ul className="flex gap-2 flex-wrap">
                {dataItem.listItems.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-1 bg-gradient-to-b from-teal-900  to-teal-700 rounded-3xl md:shadow-3xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Tilt>
      ))}
      {/* <p className=" md:p-8">
        <a href="/">View All Projects</a>
      </p> */}
    </section>
  );
}
