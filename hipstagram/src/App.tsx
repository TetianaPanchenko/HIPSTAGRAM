import './App.css';

// import LoginPage from '@pages/LoginPage/LoginPage.tsx';
import RegistrationPage from '@pages/RegistrationPage/RegistrationPage';
import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      {/*<LoginPage />*/}
        <RegistrationPage />
    </>
  );
};

export default App;
