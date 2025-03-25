import classNames from 'classnames';
import { formInput } from '../const';
import { Field } from '@base-ui-components/react/field';

interface IAuthFormIputProps {
  className?: string
}

export const AuthFormIput: React.FC<IAuthFormIputProps> = () => {

  return (
    formInput.map(({ name, label, type, required }) =>
      <Field.Root className={'form_field'} name={name} key={name}>
        <Field.Label className={'form_label'}>{label}</Field.Label>
        <Field.Control
        className={classNames('form_input')}
          name={name}
          type={type}
          required={required}
        />
      </Field.Root>
    )
  )
}
