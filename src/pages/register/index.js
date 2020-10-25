import React from 'react';
import { Container, CustomLink } from './styles';
import CustomInput from '../../components/input/index';
import CustomButton from '../../components/button/index';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <h2>Faça seu cadastro</h2>

        <CustomInput
          name="name"
          id="name"
          label="Name"
          type="text"
          register={register({
            required: "Campo obrigatório!"
          })}
          error={errors.name}
        />

        <CustomInput
          name="email"
          id="email"
          type="email"
          label="Email"
          register={register({
            required: "Campo obrigatório!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "E-mail inválido!"
            }
          })}
          error={errors.email}
        />

        <CustomInput
          name="password"
          id="password"
          type="password"
          label="Password"
          register={register({
            required: "Campo obrigatório!"
          })}
          error={errors.password}
        />

        <CustomButton
          text="Cadastrar" 
        />
        
        <CustomLink>Fazer Login</CustomLink>
      </form>
    </Container>
  )
};

export default Register;