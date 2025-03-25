import { createRoot } from 'react-dom/client'
import './index.css'
import { attachLogger } from 'effector-logger';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
attachLogger();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/test_table/'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
  </BrowserRouter>
)
