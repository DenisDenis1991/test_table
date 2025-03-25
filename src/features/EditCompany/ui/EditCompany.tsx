import { IconButton } from '@mui/material';
import { Approval, Cancel, Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { onDeleteCompany, onFinishEditCompany, onInitEditCompany } from '../model';

interface IEditCompanyProps {
  className?: string
  id: string
  isDisabled: string[]
}

export const EditCompany: React.FC<IEditCompanyProps> = ({ id, isDisabled }) => {

  const onEdit = isDisabled.find((item) => item === id)

  const handleFinishEditCompany = () => {
    onFinishEditCompany(id)
  };

  const handleInitEditCompany = () => {
    onInitEditCompany(id)
  };

  return (
    <div>
      <IconButton onClick={() => onDeleteCompany(id)} >
        <DeleteIcon />
      </IconButton >
      {id !== onEdit ?
        <IconButton onClick={handleInitEditCompany} >
          <EditIcon />
        </IconButton >
        :
        <>
          <IconButton
            type='submit'
          >
            <Approval />
          </IconButton >
          <IconButton onClick={handleFinishEditCompany}>
            <Cancel />
          </IconButton >
        </>
      }
    </div>
  )
}