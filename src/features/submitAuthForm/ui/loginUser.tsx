import { Button } from '@mui/material';

interface IloginUserProps {
  className?: string
}

export const SubmitAuthForm: React.FC<IloginUserProps> = () => {


  return (
    <Button
      variant="contained"
      type='submit'
      color="primary"
    >
      Login
    </Button>
  )
}
