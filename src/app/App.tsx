import { Route, Routes, useNavigate } from 'react-router-dom';
import './style.scss';
import './variables.scss'
import { AuthPage, MainPageCompany } from '@/pages';
import { loginFx } from '@/features/submitAuthForm/model';
import { AuthRoute } from '@/shared';
import { setErrorResponse } from '@/shared/httpClient';
import { useState } from 'react';
import { Snackbar } from '@mui/material';

function App() {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();

  loginFx.doneData.watch(() => {
    navigate('');
  })

  setErrorResponse.watch((message) => {
    setErrorMessage(message)
  })


  return (
    <>
      <Snackbar
        anchorOrigin={{horizontal: 'right', vertical: 'top' }}
        open={errorMessage ? true : false}
        onClose={() => setErrorMessage('')}
        message={errorMessage}
        key={'vertical + horizontal'} />
      <Routes>
        <Route
          path='auth'
          element={<AuthPage />} />
        <Route element={<AuthRoute />}>
          <Route
            path=''
            element={<MainPageCompany />} />
        </Route>
      </Routes></>
  )
}

export default App