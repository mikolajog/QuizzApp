import React from 'react'
import Header from './framework/Header';
import Footer from './framework/Footer';
import { Redirect } from 'react-router-dom';

function Findquizz() {
  if (!localStorage.getItem('access_token')) {
    return <Redirect to={'/login'} />;
}
  return (
      <React.Fragment>
      <Header></Header>
      Findquizz
      <Footer></Footer>
      </React.Fragment>  
  );
}

export default Findquizz;