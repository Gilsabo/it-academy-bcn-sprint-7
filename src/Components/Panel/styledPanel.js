import styled from "styled-components";

const StyledPanel = styled.div`
display:column;
border: 2px white solid;
border-radius: 10px;
width: 30rem;
margin-top:30px;
margin-bottom: 30px;
padding:5px;
`
const Pages =styled.div`
display:flex;
`

const NumberOfPagesStyle = styled.label`
margin-right: 2.7rem;
`
export  {StyledPanel, Pages, NumberOfPagesStyle}