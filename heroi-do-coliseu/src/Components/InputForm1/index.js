import React from 'react';
import {InputCustomizado} from './styles'

const InputForm1 = ({
  name,
  placeholder,
  onChange,
  type
}) => {
  return ( 
    <InputCustomizado
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
   );
}
 
export default InputForm1;