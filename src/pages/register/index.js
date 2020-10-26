import React, { useCallback } from 'react';
import { Container, CustomLink } from './styles';
import CustomInput from '../../components/input/index';
import CustomButton from '../../components/button/index';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = useCallback(
    async(data) => {
      try{
        await api.post('/users', data);
        
        history.push('/');
      }catch(err) {
        console.log(err)
      }
    }, []
  );

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
        
        <CustomLink to="/">
          Fazer Login
        </CustomLink>
      </form>
    </Container>
  )
};

export default Register;