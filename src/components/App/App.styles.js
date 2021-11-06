import styled from "styled-components";
import bg from '../../assets/bg.svg'

export const Wrapper = styled.div`
    height: 100vh;
    
    background-color: #f8f5ec;
    background-image: url(${bg});  /* The image used */
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 734px;
    height: 574px;
    
    background-color: #ffffff;
    
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 20px;

`;