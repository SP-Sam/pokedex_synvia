import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="w-full bg-purple-0 text-center py-2 text-[#e8ccff] flex justify-around items-center ">
      <a
        href="https://www.linkedin.com/in/spsam/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-1"
      >
        <FontAwesomeIcon icon={faLinkedin} className="h-8 hover:text-white"/>
      </a>
      <img
        className="w-40 sm:w-56"
        src="https://see.fontimg.com/api/renderfont4/xyWR/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTAwMCwiZnMiOjgxLCJmZ2MiOiIjRjlGQUZBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U3ludmlhIFBva2VkZXg/pokemon-solid-normal.png"
        alt="Imagem Synvia Pokedex"
      />
      <a
        href="https://github.com/SP-Sam/pokedex_synvia"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1"
      >
        <FontAwesomeIcon icon={faGithub} className="h-8 hover:text-white"/>
      </a>
    </header>
  )
}

export default Header