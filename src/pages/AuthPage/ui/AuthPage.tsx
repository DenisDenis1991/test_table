import classNames from 'classnames';
import { UserAuthForm } from '@/widget';

interface IAuthPageProps {
  className?: string
}

export const AuthPage: React.FC<IAuthPageProps> = () => {
  return (
    <UserAuthForm />
  )
}
