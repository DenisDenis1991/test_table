import { Field } from '@base-ui-components/react/field';
import { DateField } from '@mui/x-date-pickers/DateField';
import { CompanyRequisites } from '@/shared/const';
import classNames from 'classnames';
interface IAddNewCompanyProps {
  className?: string
}

export const NewCompany: React.FC<IAddNewCompanyProps> = () => {

  return (
    CompanyRequisites.map(({ field, type, required }) => (
      <Field.Root
        name={field}
        key={field}
        className={classNames(['list__item'])}
      >
        {type === 'date' ?
          <DateField
            className={classNames('form_input')}
            id={field}
            name={field}
            required={required}
            format="YYYY-MM-DD"
          />
          :
          <Field.Control
            id={field}
            required={required}
            name={field}
            className={classNames('form_input')}
          />
        }
      </Field.Root>

    ))
  )
}
