import { FC, memo } from 'react';

import LayoutAuthorization from '@components/LayoutAuthorization/LayoutAuthorization';
import RegistrationForm from '@components/RegistrationForm/RegistrationForm';

const LoginPage: FC = () => {
  return (
    <LayoutAuthorization>
      <RegistrationForm />
    </LayoutAuthorization>
  );
};

export default memo(LoginPage);
