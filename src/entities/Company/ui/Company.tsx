import classNames from 'classnames';
import { IDataCompany } from '@/shared/types';
import { Field } from '@base-ui-components/react/field';
import { CompanyRequisites } from '@/shared/const';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';

interface ICompanyProps {
  className?: string
  company: IDataCompany
  isDisabled: string[]
}

export const Company: React.FC<ICompanyProps> = ({ company, isDisabled }) => {
  const disabled = isDisabled.find((item) => item === company.id)

  return (
    CompanyRequisites.map(({ field, type, required }) => (
      <Field.Root name={field} key={field}>
        {type === 'date' ?
          <DateField
            id={field}
            name={field}
            disabled = {company.id === disabled ? false : true}
            required={required}
            defaultValue={dayjs(company[field as keyof IDataCompany])}
            format="YYYY-MM-DD"
            className={classNames(['form_input'])}
          />
          :
          <Field.Control
            id={field}
            required={required}
            disabled = {company.id === disabled ? false : true}
            name={field}
            className={classNames('form_input')}
            defaultValue={company[field as keyof IDataCompany]}
          />
        }
      </Field.Root>
    ))

  )
}
