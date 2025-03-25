import { Button } from '@mui/material';

interface IAddTableRowProps {
  className?: string
}

export const SubmitAddNewCompany: React.FC<IAddTableRowProps> = () => {

  return (
    <Button type='submit'>
      Добавить запись
    </Button>

  )
}
