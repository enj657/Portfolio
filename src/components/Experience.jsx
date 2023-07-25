import { experience } from "@component/data/data";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function Experience() {
  const data = experience();

  return (
    <section className="p-4 md:p-0" id="experience">
      <h2 className="md:p-8">Experience</h2>
      <div>
        {data.map((dataItem) => (
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
              <span className="col-span-2">
                {dataItem.year1} &#8212; {dataItem.year2}
              </span>
              <div className="col-span-4">
                <p>
                  <strong>{dataItem.title}</strong>
                </p>
                <a
                  href={dataItem.href}
                  target="_blank"
                  className="after:content[''] after:absolute md:after:bg-white md:after:bg-opacity-5 md:after:shadow-3xl md:after:rounded-3xl md:after:border-0 md:after:border-t md:after:border-white md:after:border-opacity-30 after:-inset-x-0 after:-inset-y-0"
                >
                  {dataItem.company}
                </a>
                <p className="my-4">{dataItem.description}</p>
                <ul className="flex gap-2 flex-wrap">
                  {dataItem.listItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-1 bg-gradient-to-b from-[#B842DC]/80 to-[#7c2c95]/70 rounded-3xl md:shadow-3xl border-0 border-t border-white border-opacity-60 text-sm leading-6 mb-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
