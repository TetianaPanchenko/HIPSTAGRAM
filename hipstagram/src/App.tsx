import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import './App.css';

const App: FC = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<LoginPage />} />
                <Route path="registration-page" element={<RegistrationPage />} />
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
