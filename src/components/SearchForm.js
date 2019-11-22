import React, {useState} from "react";
import styled from 'styled-components';

const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

const InputLabel = styled.label`

`;

const Input = styled.input`

`;


export default function SearchForm ({handleChange, search}) {
    return (
        <section className="search-form">
            <SearchWrapper>
                <InputLabel htmlFor='name'>Search Character Names: </InputLabel>
                <Input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={handleChange}
                    value={search}
                    autoComplete='off'
                />
            </SearchWrapper>
        </section>
    );
}
