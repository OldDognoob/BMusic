import styled from "styled-components";

const StyledPlayer = styled.Div`
background: ${props => props.theme.bgcolor};
border:${props=> props.theme.border};
max-width:1900px;
margin: 0 auto;
display: -webkit-box;
display: flex;
flex-direction: row;
max-height: 863px;
transition: all 0.5s ease;

@media screen and (max-width: 1400px){
    display: block;
    max-height: 10000px;
}
`;
export default StyledPlayer;