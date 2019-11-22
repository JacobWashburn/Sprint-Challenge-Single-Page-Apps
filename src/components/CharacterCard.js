import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  border: 3px solid Green;
  border-radius: 2rem;
  margin: 3% 0;
  padding: 0 1%;
  background-color: lightblue;
`;
const Image = styled.img`
  border-radius: 1.5rem;
  margin-top: 3%;
`;

const NameH1 = styled.h1`
  color: blue;
  text-align: center;
`;
const SpeciesH3 = styled.h3`
  color: black;
  text-align: center;
`;

export default function CharacterCard ({character}) {
    const {name, species, image} = character;
    return (
        <CardWrapper>
            <Image src={image}/>
            <NameH1>{name}</NameH1>
            <SpeciesH3>{species}</SpeciesH3>
        </CardWrapper>
    );
}
