import { Form } from '@base-ui-components/react/form';
import classNames from 'classnames';
import { NewCompany } from '@/entities';
import { SubmitAddNewCompany } from '@/features';
import { addNewCompany } from '@/features/SubmitAddNewCompany/model';


interface IAddNewCompantProps {
  className?: string
}

export const AddNewCompany: React.FC<IAddNewCompantProps> = () => {
  return (
    <Form
      className={classNames('table')}
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const value = Object.fromEntries(formData);
        addNewCompany(value)
        form.reset();
      }}
    >
      <NewCompany />
      <SubmitAddNewCompany />
    </Form>
  )
}
