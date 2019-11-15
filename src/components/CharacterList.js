import React, {useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import CharacterCard from './CharacterCard';

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CharListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function CharacterList () {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character/')
            .then(re => {
                console.log('response', re);
                setCharacters(re.data.results);
            });
    }, []);

    return (
        <section className="character-list">
            <NavWrapper>
                <NavLink to='/'>Home</NavLink>
            </NavWrapper>
            <CharListWrapper>
                {characters.map((character, index) => <CharacterCard character={character} key={index}/>)}
            </CharListWrapper>
        </section>
    );
}
