import React, { useCallback } from 'react';
import { Container, CustomLink } from './styles';
import CustomInput from '../../components/input/index';
import CustomButton from '../../components/button/index';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const {login} = useAuth();
  const history = useHistory();

  const onSubmit = useCallback(
    async(data) => {
      try{
        await login({
          email: data.email,
          password: data.password,
        });

        history.push('/survey');
      }catch(err) {
        console.log(err);
      }

    }, [login, history]
  )

  return (
    <Container>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <h2>Login</h2>

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
          text="Entrar"
        />

        <CustomLink to="/register">
          Criar conta
        </CustomLink>
      </form>
    </Container>
  )
};

export default Login;