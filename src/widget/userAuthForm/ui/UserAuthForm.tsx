import { SubmitAuthForm } from '@/features';
import { AuthFormIput } from '@/entities/AuthFormInput';
import { useUnit } from 'effector-react';
import { $pending, onSubmitAuthForm } from '@/features/submitAuthForm/model';
import { Form } from '@base-ui-components/react/form';
import { CircularProgress } from '@mui/material';

interface IAuthTableProps {
  className?: string
}

export const UserAuthForm: React.FC<IAuthTableProps> = () => {
  const loading = useUnit($pending);
  return (
    loading ?
      (
        <CircularProgress />
      ) : (
        <>
          <Form
            className={'auth_form'}
            onSubmit={async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const value = Object.fromEntries(formData);
              onSubmitAuthForm(value);
            }}
          >
            <AuthFormIput />
            <SubmitAuthForm />
          </Form>
        </>
      )
  );
};
