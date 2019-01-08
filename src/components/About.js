import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faMedium, faAngellist } from '@fortawesome/free-brands-svg-icons'



export default function About(props) {
  return (
    <main>
      <h3> About Me: </h3>

      <section>
      Welcome! My name is Isaac and I'm a NYC-based Software Developer.
      I've been programming since high school, and I figured it was about time
      that I carved out my own little slice of the internet, so welcome to my
      humble little website. This site is available on Github, so if you want
      to make your own website that looks exactly like this one, feel free to
      pull the repository and use it yourself. Make sure to shoot me a message if
      you do, it'll make me pretty happy ˆ_ˆ.
      </section>
      <br />

      <section>
      My programming experience lies mainly in web development, both front end and
      back end. However, I have a sizable chunk of laboratory based programming
      experience as well, so data wrangling and embedded code is also right up my alley.
      <br />
      Here are some technologies that I have experience in:
      <br />
      Scripting Languages: Javascript (node.js), Ruby, Python, Java, F#, MATLAB
      <br />
      Frameworks: React/Redux, Ruby on Rails, Sinatra
      <br />
      Database Languages: Postgresql, SQLite3
      <br />
      I've also tinkered with: Bootstrap, Docker, Redis, LaTeX, Express, OCaml, C++, Django
      </section>
      <br />

      <section>
      Find me on the following websites:
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithubSquare} />
      <FontAwesomeIcon icon={faMedium} />
      <FontAwesomeIcon icon={faAngellist} />

      </section>

    </main>
  )
}
