import React from 'react';
import { Redirect } from 'react-router-dom';



function Sourcecode() {
  if (!localStorage.getItem('access_token')) {
    return <Redirect to={'/login'} />;
}

  return <Redirect to={'https://github.com/mikolajog/QuizzApp'} />;
}

export default Sourcecode;