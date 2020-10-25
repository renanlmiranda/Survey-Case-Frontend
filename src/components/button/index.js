import React from 'react';
import { CustomBtn } from './styles';

const CustomButton = props => (
  <CustomBtn
    variant="contained" 
    color="primary" 
    type="submit"
  >{props.text}</CustomBtn>
);

export default CustomButton;