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
        src="https://img.icons8.com/fluency/96/000000/pokeball.png"
        alt="Imagem Synvia Pokedex"
        className='w-12'
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