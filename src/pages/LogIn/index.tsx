import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { Flex, Form, Page } from 'src/components/core';
import { routes } from 'src/config';
import { useLogInForm } from 'src/hooks/forms/useLogInForm';

const LogIn = () => {
  const {
    handleSubmit, register, isLoading, error, isError,
  } = useLogInForm();

  return (
    <Page.Page>
      <Form.Container>
        <Page.Title>Log In</Page.Title>
        <Form.Error>{error}</Form.Error>
        <Form.Form onSubmit={handleSubmit}>
          <Flex column gap={2}>
            <Input label="Email" {...register('email')} error={isError} />
            <Input label="Password" {...register('password')} error={isError} />
          </Flex>
          <p>
            Don&apos;t have an account ?
            {' '}
            <Link to={routes.register.fullPath}>register</Link>
          </p>
          <Button isLoading={isLoading}>Submit</Button>
        </Form.Form>
      </Form.Container>
    </Page.Page>
  );
};

export default LogIn;
