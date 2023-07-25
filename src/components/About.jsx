import React from 'react'

export default function About() {
  return (
    <section className="flex flex-1 p-4 md:p-8" id='about'>
      <div className="flex flex-col justify-center">
        <h2>About</h2>
        <p className="text-base mb-6">{`Hey, I'm Elle, a web developer who loves creating awesome websites. I got hooked on web development after a data analytics bootcamp in 2022.`}</p>
        <p className="text-base mb-6">{`I'm all about making websites look incredible on any device and accessible to everyone. I want the web to be a fun and inclusive place for all. I love keeping up to date with the latest technologies and have been continuously improving my knowledge of HTML, JS, and CSS.`}</p>
        <p className="text-base mb-6">{`When I'm not coding, you can find me hiking, hanging out with loved ones, playing music, or exploring virtual worlds in video games.`}</p>
      </div>
    </section>
  )
}
