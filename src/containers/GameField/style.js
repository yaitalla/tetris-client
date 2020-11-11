import styled from 'styled-components';

export const FieldGrid = styled.div `
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 2fr);
    grid-gap: 1px;
    border: 10px solid #333;
    border-radius: 3px;
    width: 100%;
    max-width: 25vw;
    background: #111;
`;