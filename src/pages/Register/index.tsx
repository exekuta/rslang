import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { Flex, Form, Page } from 'src/components/core';
import { routes } from 'src/config';
import { useRegisterForm } from 'src/hooks/forms/useRegisterForm';

const Register = () => {
  const {
    handleSubmit, register, isLoading, errors, error,
  } = useRegisterForm();

  return (
    <Page.Page>
      <Form.Container>
        <Page.Title>Register</Page.Title>
        <Form.Error>{error}</Form.Error>
        <Form.Form onSubmit={handleSubmit}>
          <Flex column gap={2}>
            <Input
              label="Name"
              error={errors?.name || !!error}
              {...register('name')}
            />
            <Input
              label="Email"
              error={errors?.email || !!error}
              {...register('email')}
            />
            <Input
              label="Password"
              error={errors?.password || !!error}
              {...register('password')}
            />
          </Flex>
          <p>
            Have an account ?
            {' '}
            <Link to={routes.login.fullPath}>log in</Link>
          </p>
          <Button isLoading={isLoading}>Submit</Button>
        </Form.Form>
      </Form.Container>
    </Page.Page>
  );
};

export default Register;
