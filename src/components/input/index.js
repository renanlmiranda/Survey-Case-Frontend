import React from 'react';
import { CustomIpt, Span } from './styles';


const CustomInput = ({register, error, name, id, type, label}) => {
  return <>
    <CustomIpt
      name= {name}
      id= {id}
      type= {type}
      label= {label}
      variant= "outlined"
      inputRef={register}
    />
    {error && <Span>{error.message}</Span>}
  </>
};

export default CustomInput;