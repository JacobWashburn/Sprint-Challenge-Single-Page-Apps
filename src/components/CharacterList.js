import React, {useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import SearchForm from './SearchForm';

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
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(re => {
                console.log('response', re);
                const searchedCharacters = re.data.results.filter(character => {
                    return character.name.toLowerCase().includes(search.toLowerCase());
                });
                setCharacters(searchedCharacters);
            });
    }, [search]);

    const handleChange = event => {
        setSearch(event.target.value);
    };

    return (
        <section className="character-list">
            <NavWrapper>
                <NavLink to='/'>Home</NavLink>
            </NavWrapper>
            <SearchForm handleChange={handleChange} search={search}/>
            <CharListWrapper>
                {characters.map((character, index) => <CharacterCard character={character} key={index}/>)}
            </CharListWrapper>
        </section>
    );
}
