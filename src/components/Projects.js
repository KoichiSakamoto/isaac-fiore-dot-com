import React from 'react'

export default function Projects(props) {
  return (
    <main>
      <section>
        <h5> A Billion Beautiful Days </h5>
          An e-commerce web app for my father's artwork.
          <br />
          <a href="https://github.com/KoichiSakamoto/A-Billion-Beautiful-Days-Backend">Backend Github | </a>
          <a href="https://github.com/KoichiSakamoto/A-Billion-Beautiful-Days-Frontend">Frontend Github | </a>
          <a href="https://thawing-ocean-58706.herokuapp.com/">Heroku Demo</a>
          <ul>
            <li> - Implemented a frontend using React.js, with Redux for state. </li>
            <li> - Created a REST API backend with Rails.</li>
            <li> - Designed database architecture. </li>
            <li> - Styled using React-Bootstrap and custom CSS, following semantic markup principles.</li>
          </ul>
      </section>
      <section>
        <h5> Poppn </h5>
          Social Platform for users to share their outfits, and look up styles.
          <br />
          <a href="https://github.com/cl2534/poppin_backend">Backend Github | </a>
          <a href="https://github.com/cl2534/poppin_frontend">Frontend Github | </a>
          <a href="https://young-thicket-55460.herokuapp.com/">Heroku Demo</a>
          <ul>
            <li> - Implemented a frontend using React.js. </li>
            <li> - Created a REST API backend with Rails.</li>
            <li> - Styled using React-Bootstrap and custom CSS.</li>
          </ul>
      </section>
      <section>
        <h5> Arduino Synthesizer </h5>
          Simple digital to analog synthesizer built using an Arduino Uno Microcontroller.
          <br />
          <a href="https://drive.google.com/file/d/1ZFY8kBS1-EczrjJcEwYy6oNSowGC_0l1/view?usp=sharing" target="_blank">Research Paper on Google Drive</a>
          <ul>
            <li> - Recorded semi-pure waveforms of nylon string guitar plucks. </li>
            <li> - Implemented Fourier Analysis script using MATLAB, which yielded component waves of recorded waveforms.</li>
            <li> - Implemented component wave summation script in Python.</li>
            <li> - Arduino embedded code written in C++. Takes digital data from Python script, and sends an equivalent electric current to a speaker. </li>
            <li> - Research results written in LaTeX. </li>
          </ul>
      </section>
      <section>
        <h5> McGill Physics Department: Alloy Crystallization Simulation Software </h5>
          Debugged and analyzed results of alloy crystallization software. Ensured simulation results were in accordance with known data of alloy crystallization.
          <br />
          <a href="https://drive.google.com/file/d/1rXhdHPmCcq2-r9BZDIOrzjei0_KzQdiP/view?usp=sharing" target="_blank">Research Paper on Google Drive</a>
          <ul>
            <li> - Confirmed theoretical accuracy of C++ code. </li>
            <li> - Learned inner workings of simulation software.</li>
            <li> - Ran simulations on McGill HPC's Guillimin supercomputer.</li>
            <li> - Extracted data slices using Python. </li>
            <li> - Analyzed results using Paraview. </li>
            <li> - Research results written in LaTeX. </li>
          </ul>
      </section>
    </main>
  )
}
