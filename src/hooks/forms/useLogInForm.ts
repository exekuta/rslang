import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routes } from 'src/config';
import { useLogInMutation } from 'src/services/api/users.api';
import { login } from 'src/store/reducers/auth';
import { IUserLogInData, IStringApiError } from 'src/types/api/User.types';

export const useLogInForm = () => {
  const [logIn, info] = useLogInMutation();
  const navigate = useNavigate();
  const useFormReturn = useForm<IUserLogInData>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!info.data) return;
    navigate(routes.home.fullPath);

    dispatch(login(info.data));

    useFormReturn.reset();
  }, [dispatch, info.data, navigate, useFormReturn]);

  const handleSubmit = useFormReturn.handleSubmit((data) => {
    logIn(data);
  });

  const error = (info.error as IStringApiError)?.data || '';

  return {
    ...info,
    ...useFormReturn,
    handleSubmit,
    error,
  };
};
