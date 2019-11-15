import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

import CharacterCard from './CharacterCard';

const CharListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
        .then(re => {
          console.log('response',re);
          setCharacters(re.data.results)
        })
  }, []);

  return (
    <section className="character-list">
      <CharListWrapper>
      {characters.map((character, index) =>  <CharacterCard character={character} key={index}/>)}
      </CharListWrapper>
    </section>
  );
}
