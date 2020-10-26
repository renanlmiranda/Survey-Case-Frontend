import styled from 'styled-components';
import  { Link } from 'react-router-dom';

export const Container = styled.div `
  display: flex; 
  width: 100vw;
  height: 100vh;

  form {
    display: flex;
    flex-direction:column;
    width: 100%;
    max-width: 300px;
    height: 100%;
    margin: auto;
    justify-content: center; 
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const CustomLink = styled(Link)`
  text-align: center;
  font-weight: bold;
  text-decoration: none;
`;