import { FC, memo } from 'react';

import LayoutAuthorization from '@components/LayoutAuthorization/LayoutAuthorization';
import LoginForm from '@components/LoginForm/LoginForm';

const LoginPage: FC = () => {
  return (
          <LayoutAuthorization>
              <LoginForm />
          </LayoutAuthorization>
  );
};

export default memo(LoginPage);
