import { FC } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import './App.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
