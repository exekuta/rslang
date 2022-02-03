import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from 'src/services/api/users.api';
import {
  IParcedError,
  IStringApiError,
  IUserRegisterData,
  IUserRegisterError,
} from 'src/types/api/User.types';

export const useRegisterForm = () => {
  const [register, info] = useRegisterMutation();
  const useFormReturn = useForm<IUserRegisterData>();

  const handleSubmit = useFormReturn.handleSubmit((data) => {
    register(data);
    useFormReturn.reset();
  });

  const errors: IParcedError<IUserRegisterData> | null = useMemo(
    () => (info.error as IUserRegisterError)?.data?.error?.errors?.reduce(
      (acc, { path, message }) => {
        acc[path] = message;
        return acc;
      },
        {} as IParcedError<IUserRegisterData>,
    ) || null,
    [info.error],
  );

  const error = (info?.error as IStringApiError)?.data;

  return {
    ...info,
    ...useFormReturn,
    handleSubmit,
    errors,
    error: typeof error === 'string' ? error : info.error,
  };
};
