import styled from 'styled-components';
import  { TextField } from '@material-ui/core';

export const CustomIpt =  styled(TextField) `
  &&{
      display: flex;
      flex-direction:column;
      margin-top: 20px;
      margin-bottom: 5px;
  }
`;

export const Span = styled.span `
  color: red;
`;